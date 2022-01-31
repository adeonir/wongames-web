import { GetServerSidePropsContext } from 'next'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries'
import { QueryGames, QueryGamesVariables } from 'graphql/types'

import { parseQueryStringToSearch } from 'utils/filters'
import {
  genresFields,
  platformsFields,
  priceFields,
  sortFields,
} from 'utils/filters/fields'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

export default function Games(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields,
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformsFields,
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields,
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genresFields,
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories,
  ]

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToSearch({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  })

  return {
    props: {
      initializeApolloState: apolloClient.cache.extract(),
      filterItems,
    },
  }
}
