import { useQueryGames } from 'graphql/queries'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { formatPrice } from 'utils/formatters'

import { cartMapper } from 'utils/mappers'
import { getStorageItem, setStorageItem } from 'utils/storage'

export type CartItem = {
  id: string
  img: string
  price: number
  title: string
}

export type CartContextProps = {
  items: CartItem[]
  quantity: number
  total: string
  loading: boolean
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: '$0.00',
  loading: false,
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
}

export const CartContext = createContext<CartContextProps>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: ReactNode
}

const CART_KEY = 'cartItem'

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItemId, setCartItemId] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItemId(data)
    }
  }, [])

  const { data, loading } = useQueryGames({
    skip: !cartItemId?.length,
    variables: {
      where: {
        id: cartItemId,
      },
    },
  })

  const total = data?.games.reduce((acc, game) => {
    return acc + game.price
  }, 0)

  const isInCart = (id: string) => cartItemId.includes(id)

  const saveCart = (items: string[]) => {
    setCartItemId(items)
    setStorageItem(CART_KEY, items)
  }

  const addToCart = (id: string) => {
    const items = [...cartItemId, id]
    saveCart(items)
  }

  const removeFromCart = (id: string) => {
    const items = cartItemId.filter((item) => item !== id)
    saveCart(items)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItemId?.length,
        total: formatPrice(total || 0),
        loading,
        isInCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
