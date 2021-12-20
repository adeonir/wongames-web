import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import ShowCase from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle?: string
  newGames: GameCardProps[]
  popularGamesTitle?: string
  popularGamesHighlight: HighlightProps
  popularGames: GameCardProps[]
  upcomingGamesTitle?: string
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  freeGamesTitle?: string
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const HomeTemplate = ({
  banners,
  newGamesTitle = 'New Games',
  newGames,
  popularGamesTitle = 'Popular Games',
  popularGamesHighlight,
  popularGames,
  upcomingGamesTitle = 'Upcoming Games',
  upcomingHighlight,
  upcomingGames,
  freeGamesTitle = 'Free Games',
  freeHighlight,
  freeGames,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title={newGamesTitle} games={newGames} arrowColor="black" />
    </S.SectionNews>

    <ShowCase
      title={popularGamesTitle}
      highlight={popularGamesHighlight}
      games={popularGames}
    />

    <ShowCase
      title={upcomingGamesTitle}
      games={upcomingGames}
      highlight={upcomingHighlight}
    />

    <ShowCase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
)

export default HomeTemplate
