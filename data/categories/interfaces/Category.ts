import Identified from '@data/utils/interfaces/Identified'
import Timestamped from '@data/utils/interfaces/Timestamped'

export type CategoryId = string

export interface CategoryInputs {
  name: string
  description?: string
}

export default interface Category extends Identified<CategoryId>, CategoryInputs, Timestamped { }