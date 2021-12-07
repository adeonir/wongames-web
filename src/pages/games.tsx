import { initializeApollo } from 'services'
import { QUERY_GAMES } from 'graphql/queries/games'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: QUERY_GAMES,
    variables: { limit: 9 },
  })

  return {
    props: {
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(game.price),
      })),
      filterItems: filterItemsMock,
    },
  }
}
