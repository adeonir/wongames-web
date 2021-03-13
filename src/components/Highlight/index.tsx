import * as S from 'components'

import {
  Content,
  FloatImage,
  HighlightContainer,
  Subtitle,
  Title,
} from './styles'

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
  <HighlightContainer
    backgroundImage={backgroundImage}
    floatPosition={floatPosition}
  >
    {!!floatImage && <FloatImage src={floatImage} alt={title} />}
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <S.Button as="a" href={buttonLink}>
        {buttonLabel}
      </S.Button>
    </Content>
  </HighlightContainer>
)
