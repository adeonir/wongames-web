import {
  AddShoppingCart,
  RemoveShoppingCart,
} from '@styled-icons/material-outlined'

import Button, { ButtonProps } from 'components/Button'
import { useCart } from 'hooks'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

export const CartButton = ({
  id,
  size = 'small',
  hasText = false,
}: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()
  const buttonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      aria-label={buttonText}
      icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && buttonText}
    </Button>
  )
}
