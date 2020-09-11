import { HeadingContainer } from './styles'

export type HeadingProps = {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => (
  <HeadingContainer>{children}</HeadingContainer>
)
