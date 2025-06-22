import { ReactNode } from 'react'

const buttonType = {
  active: 'bg-main text-white',
  disabled: 'text-gray5 bg-gray2',
  outline: 'border border-gray2 text-gray5',
}
const buttonSize = {
  lg: 'py-4 px-6',
  sm: 'py-3 px-4',
}

interface ButtonProps {
  type: 'active' | 'disabled' | 'outline'
  size: 'lg' | 'sm'
  customClassName?: string
  children: ReactNode
  onClick: () => void
}

const Button = ({ children, type = 'active', size = 'lg', customClassName, onClick }: ButtonProps) => {
  const base = 'flex items-center justify-center gap-x-1 rounded-[16px] button'
  const style = buttonType[type]
  const styleSize = buttonSize[size]

  return (
    <button onClick={onClick} className={`${base} ${style} ${styleSize} ${customClassName}`}>
      {children}
    </button>
  )
}
export default Button
