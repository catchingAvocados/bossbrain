import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export default function Button({ children, variant, ...props }: ButtonProps) {
  let colors = 'bg-gray-200 hover:bg-gray-300'

  if (variant === 'primary') {
    colors = 'bg-blue-500 hover:bg-blue-400 text-white'
  }

  if(variant === 'secondary') {
    colors = 'bg-pink-500 hover:bg-pink-400 text-white'
  }


  return (
    <button className={`py-1 px-4 rounded focus:outline-none focus:ring ${colors}`} {...props}>{children}</button>
  )
}