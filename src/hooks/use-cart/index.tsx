import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getStorageItem } from 'utils/storage'

type CartContextType = {
  items: string[]
}

const CART_KEY = 'cartItem'

const CartContextDefaultValues = {
  items: [],
}

const CartContext = createContext<CartContextType>(CartContextDefaultValues)

export type CartProviderProps = {
  children: ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
