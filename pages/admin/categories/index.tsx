import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Layout from '@components/Layout'
import Category from '@data/categories/interfaces/Category'
import categoryRepository from '@data/categories/repository'
import Link from 'next/link'

interface AdminCategoriesPageProps {
  categories: Category[]
}

function CategoryListItem({ category }: { category: Category }) {
  return (
    <li>
      <Link href={`/admin/categories/${category.id}`}>
        <a>{category.name}</a>
      </Link>
    </li>
  )
}

export default function AdminCategoriesPage({ categories = [] }: AdminCategoriesPageProps) {
  return (
    <Layout pageTitle='Categories'>
      <Link href='/admin/categories/create'>
        <a>Create Category</a>
      </Link>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => <CategoryListItem category={category} />)}
      </ul>
    </Layout>
  )
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    return {
      props: {
        categories: await categoryRepository.getCategories(),
      }
    }
  }
})