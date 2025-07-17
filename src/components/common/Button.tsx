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
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
}

const Button = ({
  children,
  type = 'active',
  size = 'lg',
  customClassName,
  onClick,
  leftIcon,
  rightIcon,
  disabled,
}: ButtonProps) => {
  const base = 'flex items-center justify-center gap-x-1 rounded-[16px] button'
  const style = buttonType[type]
  const styleSize = buttonSize[size]

  return (
    <button disabled={disabled} onClick={onClick} className={`${base} ${style} ${styleSize} ${customClassName}`}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}
export default Button
