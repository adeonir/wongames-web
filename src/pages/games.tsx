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

  await apolloClient.query<GetGames, GetGamesVariables>({
    query: GET_GAMES,
    variables: { limit: 15 },
  })

  return {
    props: {
      revalidate: 60,
      initializeApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock,
    },
  }
}
