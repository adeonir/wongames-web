import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
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
  <S.HeadingContainer
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.HeadingContainer>
)
