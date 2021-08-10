import Category, { CategoryId, CategoryInputs } from '../interfaces/Category'
import CategoryRepository from '../interfaces/CategoryRepository'

const generateId = (name: string): CategoryId => name.toLocaleLowerCase().replace(/[^a-z]/g, '')

const categoryFactory = (inputs: CategoryInputs, existingCategories: Category[]): Category | null => {
  const id = generateId(inputs.name)
  const dateCreated = new Date().toISOString()

  if (existingCategories.find((category) => category.id === id)) {
    return null
  }

  return {
    id,
    dateCreated,
    lastUpdated: dateCreated,
    ...inputs,
  }
}

export default function InMemoryCategoryRepository(): CategoryRepository {
  let categories = [
    categoryFactory({ name: 'Neuroscience' }, []),
    categoryFactory({ name: 'Women\'s Health' }, []),
  ]

  return {
    async createCategory(inputs: CategoryInputs) {
      const category = categoryFactory(inputs, categories)

      if(category) {
        categories.push(category)
      }

      return category
    },
    async getCategories() {
      return categories
    },
    async getCategory(id: CategoryId) {
      return categories.find((category) => category.id === id) || null
    },
    async updateCategory(id: CategoryId, data: CategoryInputs) {
      let category = null
      
      categories = categories.map((mapCategory) => {
        if(mapCategory.id === id) {
          const lastUpdated = new Date().toISOString()

          category = {
            ...mapCategory,
            ...data,
            lastUpdated,
          }

          return category
        }

        return mapCategory
      })

      return category
    }
  }
}