import { ButtonContainer } from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
}: ButtonProps) => (
  <ButtonContainer size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </ButtonContainer>
)
