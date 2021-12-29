import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'graphql/queries/games'
import {
  parseQueryStringToFilter,
  parseQueryStringToSearch,
} from 'utils/filters'
import { singleGameMapper } from 'utils/mappers'

import BaseTemplate from 'templates/Base'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import Empty from 'components/Empty'

import * as S from './styles'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 15,
      where: parseQueryStringToSearch({ queryString: query, filterItems }),
      sort: query.sort as string | null,
    },
  })

  if (!data) return <S.Loading>Loading...</S.Loading>

  const { games, gamesConnection } = data

  const hasMoreGames = games.length < (gamesConnection?.values?.length || 0)

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items,
    })
    return
  }

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <BaseTemplate>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        <section>
          {data?.games.length ? (
            <>
              <Grid>
                {data?.games.map((game) => (
                  <GameCard key={game.slug} {...singleGameMapper(game)} />
                ))}
              </Grid>

              {hasMoreGames && (
                <S.ShowMore>
                  {loading ? (
                    <S.ShowMoreLoading
                      src="/img/dots.svg"
                      alt="Loading more games"
                    />
                  ) : (
                    <S.ShowMoreButton role="button" onClick={handleShowMore}>
                      <p>Show More</p>
                      <ArrowDown size={35} />
                    </S.ShowMoreButton>
                  )}
                </S.ShowMore>
              )}
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with these filters"
            />
          )}
        </section>
      </S.Main>
    </BaseTemplate>
  )
}

export default GamesTemplate
