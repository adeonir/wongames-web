import BaseTemplate from 'templates/Base'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import Heading from 'components/Heading'
import Loader from 'components/Loader'
import ShowCase from 'components/ShowCase'

import { useWishlist } from 'hooks/use-wishlist'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishlistTemplate = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}: WishlistTemplateProps) => {
  const { items, loading } = useWishlist()
  return (
    <BaseTemplate>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items?.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
        <Divider />
      </Container>

      <ShowCase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </BaseTemplate>
  )
}

export default WishlistTemplate
