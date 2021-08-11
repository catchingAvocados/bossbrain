import { InputHTMLAttributes } from 'react'

export type InputProps = (InputHTMLAttributes<HTMLInputElement> | InputHTMLAttributes<HTMLTextAreaElement>) & {
  multiline?: boolean
  rows?: number
}

export default function Input({ multiline, className = '', ...rest }: InputProps) {
  const classes = `${className} px-2 py-1 text-base placeholder-gray-400 border rounded focus:outline-none focus:ring`

  return multiline
    ? <textarea className={classes} rows={9} {...rest as InputHTMLAttributes<HTMLTextAreaElement>} />
    : <input className={classes} {...rest as InputHTMLAttributes<HTMLInputElement>} />
}