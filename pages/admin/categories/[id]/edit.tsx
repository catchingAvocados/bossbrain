import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import CategoryForm from '@components/CategoryForm'
import Layout from '@components/Layout'
import Category, { CategoryInputs } from '@data/categories/interfaces/Category'
import shallowRoute from '@data/utils/router/shallowRoute'
import { useRouter } from 'next/router'
import { categoryServerSidePropsHandler } from '.'

interface AdminCategoryEditPageProps {
  category: Category
}

export default function AdminCategoryEditPage({ category }: AdminCategoryEditPageProps) {
  const router = useRouter()

  const onSubmit = (data: CategoryInputs) => {
    fetch('/api/admin/categories/', {
      method: 'PUT', body: JSON.stringify({
        id: category.id,
        ...data,
      })
    })
      .then((response) => response.json())
      .then(() => shallowRoute(router, '/admin/categories'))
  }

  const onCancel = () => {
    shallowRoute(router, '/admin/categories')
  }

  return (
    <Layout pageTitle='Category Edit'>
      <h1>{category.name}</h1>
      <CategoryForm name={category.name} description={category.description} onSubmit={onSubmit} onCancel={onCancel} />
    </Layout>
  )

}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: categoryServerSidePropsHandler
})