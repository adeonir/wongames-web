import { HeadingContainer } from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium'
  lineColor?: LineColors
  lineLeft?: boolean
  lineBottom?: boolean
}

export const Heading = ({
  children,
  color = 'white',
  size = 'medium',
  lineColor = 'primary',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => (
  <HeadingContainer
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </HeadingContainer>
)
