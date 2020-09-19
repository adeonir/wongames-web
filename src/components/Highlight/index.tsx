import { Button } from 'components'

import { HighlightContainer, Subtitle, Title } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

export const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}: HighlightProps) => (
  <HighlightContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Button as="a" href={buttonLink}>
      {buttonLabel}
    </Button>
  </HighlightContainer>
)
