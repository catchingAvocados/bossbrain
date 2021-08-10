import { CategoryInputs } from '@data/categories/interfaces/Category'
import InputField from './InputField'

export interface CategoryFormProps {
  name?: string
  description?: string
  onSubmit?: (data: CategoryInputs) => void
  onCancel?: () => void
}

export default function CategoryForm({ name, description, onSubmit = () => { }, onCancel = () => { } }: CategoryFormProps) {
  const onFormSubmit = (event) => {
    event.preventDefault()

    onSubmit({
      name: event.currentTarget.name.value,
      description: event.currentTarget.description.value,
    })
  }

  return (
    <form onSubmit={onFormSubmit}>
      <InputField id='name' defaultValue={name} label='Name' placeholder='Enter name' />
      <InputField id='description' defaultValue={description} label='description' placeholder='Enter description' multiline />
      <button type='button' onClick={onCancel}>Cancel</button>
      <button type='submit'>Submit</button>
    </form>
  )

}