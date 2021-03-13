import { Button, Ribbon } from 'components'
import { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbonText?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

export const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbonText,
  ribbonSize = 'normal',
  ribbonColor = 'primary',
}: BannerProps) => (
  <S.BannerContainer>
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}

    <S.Image src={image} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.BannerContainer>
)
