import { Button } from 'components'
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from 'styled-icons/material-outlined'

import {
  Content,
  Developer,
  FavButton,
  GameCardContainer,
  ImageBox,
  Info,
  Price,
  PriceBox,
  Title,
} from './styles'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
  promoPrice?: string
  isFavorite?: boolean
  onFavorite?: () => void
}

export const GameCard = ({
  title,
  developer,
  image,
  price,
  promoPrice,
  isFavorite = false,
  onFavorite,
}: GameCardProps) => (
  <GameCardContainer>
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Content>
      <Info>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </Info>
      <FavButton role="button" onClick={onFavorite}>
        {isFavorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </FavButton>
      <PriceBox>
        {!!promoPrice && <Price isPromotional>{price}</Price>}
        <Price>{promoPrice || price}</Price>
        <Button
          icon={<AddShoppingCart />}
          size="small"
          aria-label="Add to cart"
        />
      </PriceBox>
    </Content>
  </GameCardContainer>
)
