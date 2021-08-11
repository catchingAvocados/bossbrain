import { InputHTMLAttributes } from 'react'
import Input from './Input'

export type InputFieldProps = (InputHTMLAttributes<HTMLInputElement> | InputHTMLAttributes<HTMLTextAreaElement>) & {
  label?: string
  multiline?: boolean
}

export default function InputField({ id, label, className = '', ...rest }: InputFieldProps) {
  const classes = `flex flex-col ${className}`
  return (
    <div className={classes}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} name={id} {...rest} />
    </div>
  )
}