import { Button } from 'components'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'

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
}

export const GameCard = ({
  title,
  developer,
  image,
  price,
  promoPrice,
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
      <FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist" />
      </FavButton>
      <PriceBox>
        {!!promoPrice && <Price isPromotional>{price}</Price>}
        <Price>{promoPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </PriceBox>
    </Content>
  </GameCardContainer>
)
