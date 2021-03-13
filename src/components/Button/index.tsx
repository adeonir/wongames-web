import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'

import * as S from './styles'

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

export const Button = forwardRef<S.ContainerProps, ButtonProps>(
  (
    {
      children,
      icon,
      size = 'medium',
      variant = 'normal',
      fullWidth = false,
      ...props
    },
    ref
  ) => (
    <S.ButtonContainer
      ref={ref}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      {...props}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.ButtonContainer>
  )
)
