import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'
import { Home } from 'containers'
import { HomeContainerProps } from 'containers/Home'

export default function Index(props: HomeContainerProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightsMock,
      mostPopularGames: gamesMock,
      upCommingGames: gamesMock,
      upCommingHighlight: highlightsMock,
      upCommingMoreGames: gamesMock,
      freeGamesHighlight: highlightsMock,
      freeGames: gamesMock,
    },
  }
}
