import { InputHTMLAttributes } from 'react'

export type InputFieldProps = (InputHTMLAttributes<HTMLInputElement> | InputHTMLAttributes<HTMLTextAreaElement>) & {
  label?: string
  multiline?: boolean
}

export default function InputField({ id, label, placeholder, multiline = false, ...rest }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {
        multiline
          ? <textarea id={id} name={id} placeholder={placeholder} rows={4} {...rest as InputHTMLAttributes<HTMLTextAreaElement>} />
          : <input id={id} name={id} placeholder={placeholder} {...rest as InputHTMLAttributes<HTMLInputElement>} />
      }
    </div>
  )
}