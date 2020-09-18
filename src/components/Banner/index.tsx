import { Button } from 'components'

import { BannerContainer, Caption, Image, Subtitle, Title } from './styles'

export type BannerProps = {
  image: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: BannerProps) => (
  <BannerContainer>
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
