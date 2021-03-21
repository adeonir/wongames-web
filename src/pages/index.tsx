import { Home, HomeContainerProps } from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightsMock from 'components/Highlight/mock'

export default function Index(props: HomeContainerProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightsMock,
      mostPopularGames: gamesMock,
      upComingGames: gamesMock,
      upComingHighlight: highlightsMock,
      upComingMoreGames: gamesMock,
      freeGamesHighlight: highlightsMock,
      freeGames: gamesMock,
    },
  }
}
