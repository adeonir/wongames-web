import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
} from '@styled-icons/material-outlined'

import { Button, Ribbon } from 'components'
import { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
  promoPrice?: string
  isFavorite?: boolean
  onFavorite?: () => void
  ribbonText?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

export const GameCard = ({
  title,
  developer,
  image,
  price,
  promoPrice,
  isFavorite = false,
  onFavorite,
  ribbonText,
  ribbonSize = 'small',
  ribbonColor = 'primary',
}: GameCardProps) => (
  <S.GameCardContainer>
    {!!ribbonText && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbonText}
      </Ribbon>
    )}

    <S.ImageBox>
      <img src={image} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button" onClick={onFavorite}>
        {isFavorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>
      <S.PriceBox>
        {!!promoPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promoPrice || price}</S.Price>
        <Button
          icon={<AddShoppingCart />}
          size="small"
          aria-label="Add to cart"
        />
      </S.PriceBox>
    </S.Content>
  </S.GameCardContainer>
)
