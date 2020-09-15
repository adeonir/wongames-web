import { ButtonContainer } from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode | JSX.Element
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export const Button = ({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => (
  <ButtonContainer size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </ButtonContainer>
)
