import { initializeApollo } from 'services'
import { GET_GAMES } from 'graphql/queries'
import { GetGames, GetGamesVariables } from 'graphql/types'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 9 },
  })

  return {
    props: {
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price,
      })),
      filterItems: filterItemsMock,
    },
  }
}
