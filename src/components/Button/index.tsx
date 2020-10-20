import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './styles'

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonProps = {
  icon?: React.ReactNode | JSX.Element
  size?: 'small' | 'medium' | 'large'
  variant?: 'normal' | 'ghost'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

export const Button = ({
  children,
  icon,
  size = 'medium',
  variant = 'normal',
  fullWidth = false,
  ...props
}: ButtonProps) => (
  <ButtonContainer
    size={size}
    variant={variant}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </ButtonContainer>
)
