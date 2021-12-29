import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import GameTemplate, { GameTemplateProps } from 'templates/Game'

import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import {
  GET_GAMES,
  GET_GAME_BY_SLUG,
  GET_RECOMMENDED,
  GET_UPCOMING,
} from 'graphql/queries'
import {
  GetGames,
  GetGamesVariables,
  GetGameBySlug,
  GetGameBySlugVariables,
  GetRecommended,
  GetUpcoming,
  GetUpcomingVariables,
} from 'graphql/types'

const apolloClient = initializeApollo()
const TODAY = new Date().toISOString().slice(0, 10)

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
  >({
    query: GET_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache',
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const [game] = data.games

  const { data: item } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED,
  })

  const { data: upcoming } = await apolloClient.query<
    GetUpcoming,
    GetUpcomingVariables
  >({ query: GET_UPCOMING, variables: { date: TODAY } })

  return {
    revalidate: 60,
    props: {
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
      upcomingTitle: 'Upcoming',
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showCase?.upcomingGames?.highlight
      ),
      recommendedTitle: item.recommended?.section?.title,
      recommendedGames: gamesMapper(item.recommended?.section?.games),
    },
  }
}
