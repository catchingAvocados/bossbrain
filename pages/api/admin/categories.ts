import { NextApiRequest, NextApiResponse } from 'next'
import categoryRepository from '@data/categories/repository'
import { CategoryId, CategoryInputs } from '@data/categories/interfaces/Category'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

async function postHandler(request: NextApiRequest, response: NextApiResponse) {
  const data = JSON.parse(request.body)
  const category = await categoryRepository.createCategory(data)

  if (!category) {
    return response.status(303).end()
  }

  response.json(category)
}

async function putHandler(request: NextApiRequest, response: NextApiResponse) {
  const { id, ...inputs }: CategoryInputs & { id: CategoryId } = JSON.parse(request.body)

  const category = await categoryRepository.updateCategory(id, inputs)

  response.json(category)
}

async function categoriesApi(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'POST') {
    return postHandler(request, response)
  }

  if (request.method === 'PUT') {
    return putHandler(request, response)
  }

  if(request.method === 'GET') {
    return response.json(await categoryRepository.getCategories())
  }
}

export default withApiAuthRequired(categoriesApi)