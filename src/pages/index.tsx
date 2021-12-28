import { GetStaticProps } from 'next'

import HomeTemplate, { HomeTemplateProps } from 'templates/Home'

import { initializeApollo } from 'services'
import { GetHome, GetHomeVariables } from 'graphql/types'
import { GET_HOME } from 'graphql/queries'
import { bannersMapper, gamesMapper, highlightMapper } from 'utils'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections },
  } = await apolloClient.query<GetHome, GetHomeVariables>({
    query: GET_HOME,
    variables: { date: TODAY },
    fetchPolicy: 'no-cache',
  })

  return {
    revalidate: 10,
    props: {
      banners: bannersMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      popularGamesTitle: sections?.popularGames?.title,
      popularGamesHighlight: highlightMapper(sections?.popularGames?.highlight),
      popularGames: gamesMapper(sections?.popularGames?.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight),
    },
  }
}
