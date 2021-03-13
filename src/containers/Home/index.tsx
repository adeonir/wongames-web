import { BannerSlider, Container, Footer, Menu, ShowCase } from 'components'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type HomeContainerProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upCommingGames: GameCardProps[]
  upCommingHighlight: HighlightProps
  upCommingMoreGames: GameCardProps[]
  freeGamesHighlight: HighlightProps
  freeGames: GameCardProps[]
}

export const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upCommingGames,
  upCommingHighlight,
  upCommingMoreGames,
  freeGamesHighlight,
  freeGames,
}: HomeContainerProps) => (
  <S.HomeContainer>
    <Container>
      <Menu />
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
      <ShowCase heading="Upcomming" games={upCommingGames} />
      <ShowCase highlight={upCommingHighlight} games={upCommingMoreGames} />
    </S.SectionUpcoming>

    <ShowCase
      heading="Free Games"
      highlight={freeGamesHighlight}
      games={freeGames}
    />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.HomeContainer>
)
