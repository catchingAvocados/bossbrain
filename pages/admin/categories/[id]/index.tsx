import Layout from '@components/Layout'
import Category from '@data/categories/interfaces/Category'
import categoryRepository from '@data/categories/repository'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

export async function categoryServerSidePropsHandler({ params }: GetServerSidePropsContext) {
  const category = await categoryRepository.getCategory(params.id as string)

  if (!category) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      }
    }
  }

  return {
    props: {
      category,
    }
  }
}

interface AdminCategoryPageProps {
  category: Category
}

export default function AdminCategoryPage({ category }: AdminCategoryPageProps) {
  return (
    <Layout pageTitle='Category'>
      <Link href={`/admin/categories/${category.id}/edit`}>
        <a>Edit</a>
      </Link>
      <h1>{category.name}</h1>
      <p>{category.description}</p>
      <h2>Quizzes</h2>
    </Layout>
  )
}

export const getServerSideProps = categoryServerSidePropsHandler