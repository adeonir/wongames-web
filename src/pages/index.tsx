import { GetStaticProps } from 'next'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

import { initializeApollo } from 'services'
import { GET_HOME } from 'graphql/queries'
import { GetHome } from 'graphql/types'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const {
    data: { banners, newGames, upcomingGames, freeGames },
  } = await apolloClient.query<GetHome>({ query: GET_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label,
        buttonLink: banner.button?.link,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size,
        }),
      })),
      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),
      upcomingHighlight: highlightMock,
      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developers: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price,
      })),
      freeHighlight: highlightMock,
    },
  }
}
