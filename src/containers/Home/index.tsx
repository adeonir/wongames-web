import {
  BannerSlider,
  Container,
  Footer,
  GameCardSlider,
  Heading,
  Menu,
} from 'components'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { Highlight, HighlightProps } from 'components/Highlight'

import {
  HomeContainer,
  SectionBanner,
  SectionFooter,
  SectionFreeGames,
  SectionMostPopular,
  SectionNews,
  SectionUpcoming,
} from './styles'

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
  <HomeContainer>
    <Container>
      <Menu />
      <SectionBanner>
        <BannerSlider items={banners} />
      </SectionBanner>
    </Container>

    <SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </SectionNews>

    <Container>
      <SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </SectionMostPopular>

      <SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upCommingGames} />
        <Highlight {...upCommingHighlight} />
        <GameCardSlider items={upCommingMoreGames} />
      </SectionUpcoming>

      <SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
        <Highlight {...freeGamesHighlight} />
        <GameCardSlider items={freeGames} />
      </SectionFreeGames>
    </Container>

    <SectionFooter>
      <Container>
        <Footer />
      </Container>
    </SectionFooter>
  </HomeContainer>
)
