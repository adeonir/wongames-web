import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import GameTemplate, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'services'
import { GET_GAMES, GET_GAME_BY_SLUG, GET_RECOMMENDED } from 'graphql/queries'
import {
  GetGames,
  GetGamesVariables,
  GetGameBySlug,
  GetGameBySlugVariables,
  GetRecomended,
} from 'graphql/types'
import { gamesMapper } from 'utils'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <GameTemplate {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 9 },
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    GetGameBySlug,
    GetGameBySlugVariables
  >({ query: GET_GAME_BY_SLUG, variables: { slug: `${params?.slug}` } })

  if (!data.games.length) {
    return { notFound: true }
  }

  const [game] = data.games

  const { data: item } = await apolloClient.query<GetRecomended>({
    query: GET_RECOMMENDED,
  })

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${game.cover?.url}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description,
      },
      gallery: game.gallery.map(({ url, alternativeText }) => ({
        src: `http://localhost:1337${url}`,
        label: alternativeText ? alternativeText : game.name,
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(({ name }) => name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(({ name }) => name),
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedTitle: item.recommended?.section?.title,
      recommendedGames: gamesMapper(item.recommended?.section?.games),
    },
  }
}
