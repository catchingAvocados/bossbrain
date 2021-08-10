import Category, { CategoryId, CategoryInputs } from './Category'

export default interface CategoryRepository {
  createCategory(data: CategoryInputs): Promise<Category | null>
  getCategories(): Promise<Category[]>
  getCategory(id: CategoryId): Promise<Category | null>
  updateCategory(id: CategoryId, data: CategoryInputs): Promise<Category | null>
}