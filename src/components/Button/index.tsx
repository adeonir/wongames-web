import { ButtonContainer } from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <ButtonContainer size={size}>
    {!!children && <span>{children}</span>}
  </ButtonContainer>
)
