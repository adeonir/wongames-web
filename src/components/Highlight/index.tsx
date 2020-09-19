import { Button } from 'components'

import { Content, HighlightContainer, Subtitle, Title } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  buttonLabel: string
  buttonLink: string
}

export const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  buttonLabel,
  buttonLink,
}: HighlightProps) => (
  <HighlightContainer backgroundImage={backgroundImage}>
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
  </HighlightContainer>
)
