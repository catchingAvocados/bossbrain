import { CategoryInputs } from '@data/categories/interfaces/Category'
import Button from './Button'
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
    <form className='flex flex-col gap-3' onSubmit={onFormSubmit}>
      <InputField id='name' defaultValue={name} label='Name' placeholder='Enter name' />
      <InputField id='description' defaultValue={description} label='Description' placeholder='Enter description' multiline />
      <div className='flex justify-between'>
        <Button type='button' onClick={onCancel}>Cancel</Button>
        <Button type='submit' variant='primary'>Submit</Button>
      </div>
    </form>
  )

}