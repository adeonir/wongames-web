import { Base } from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { BannerSlider } from 'components/BannerSlider'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { ShowCase } from 'components/ShowCase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingGames: GameCardProps[]
  upComingHighlight: HighlightProps
  upComingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  freeGames: GameCardProps[]
}

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upComingGames,
  upComingHighlight,
  upComingMoreGames,
  freeGamesHighlight,
  freeGames,
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase heading="News" games={newGames} />
    </S.SectionNews>

    <ShowCase
      heading="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <ShowCase heading="Upcoming" games={upComingGames} />
      <ShowCase highlight={upComingHighlight} games={upComingMoreGames} />
    </S.SectionUpcoming>

    <ShowCase
      heading="Free Games"
      highlight={freeGamesHighlight}
      games={freeGames}
    />
  </Base>
)
