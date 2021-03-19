import { Button } from 'components'

import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  floatPosition?: 'left' | 'right'
  buttonLabel: string
  buttonLink: string
}

export const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  floatImage,
  floatPosition = 'left',
  buttonLabel,
  buttonLink,
}: HighlightProps) => (
  <S.HighlightContainer
    backgroundImage={backgroundImage}
    floatPosition={floatPosition}
  >
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.HighlightContainer>
)
