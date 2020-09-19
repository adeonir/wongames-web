import { Button, Ribbon } from 'components'
import { RibbonColors, RibbonSizes } from 'components/Ribbon'

import { BannerContainer, Caption, Image, Subtitle, Title } from './styles'

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
  <BannerContainer>
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}

    <Image src={image} role="img" aria-label={title} />

    <Caption>
      <Title>{title}</Title>
      <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </Caption>
  </BannerContainer>
)
