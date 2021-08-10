import CategoryForm from '@components/CategoryForm'
import Layout from '@components/Layout'
import { CategoryInputs } from '@data/categories/interfaces/Category'
import shallowRoute from '@data/utils/router/shallowRoute'
import { useRouter } from 'next/dist/client/router'

export default function AdminCategoryCreatePage() {
  const router = useRouter()

  const onSubmit = (data: CategoryInputs) => {
    fetch('/api/admin/categories', { method: 'POST', body: JSON.stringify(data) })
      .then((response) => response.json())
      .then(() => shallowRoute(router, '/admin/categories'))
      .catch(() => alert('Failed to create category'))
  }

  const onCancel = () => {
    shallowRoute(router, '/admin/categories')
  }

  return (
    <Layout pageTitle='Category Create'>
      <h1>Create a Category</h1>
      <CategoryForm onSubmit={onSubmit} onCancel={onCancel} />
    </Layout>
  )
}