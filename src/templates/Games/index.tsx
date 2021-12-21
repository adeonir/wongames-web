import { useQuery } from '@apollo/client'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { GetGames, GetGamesVariables } from 'graphql/types'
import { GET_GAMES } from 'graphql/queries'
import { singleGameMapper } from 'utils'

import BaseTemplate from 'templates/Base'

import { Grid } from 'components/Grid'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'

import * as S from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data } = useQuery<GetGames, GetGamesVariables>(GET_GAMES, {
    variables: { limit: 15 },
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <BaseTemplate>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {data?.games.map((game) => (
              <GameCard key={game.slug} {...singleGameMapper(game)} />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </BaseTemplate>
  )
}

export default GamesTemplate
