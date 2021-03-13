import { GameCardSlider, Heading, Highlight } from 'components'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export const ShowCase = ({ title, highlight, games }: ShowCaseProps) => (
  <S.ShowCaseContainer>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.ShowCaseContainer>
)
