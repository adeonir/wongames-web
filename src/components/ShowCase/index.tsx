import { GameCardSlider, Heading, Highlight } from 'components'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowCaseProps = {
  heading?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

export const ShowCase = ({ heading, highlight, games }: ShowCaseProps) => (
  <S.ShowCaseContainer>
    {!!heading && (
      <Heading lineLeft lineColor="secondary">
        {heading}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.ShowCaseContainer>
)
