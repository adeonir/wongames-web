import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'

export type RibbonSizes = 'small' | 'normal'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal',
}: RibbonProps) => (
  <S.RibbonContainer color={color} size={size}>
    {children}
  </S.RibbonContainer>
)
