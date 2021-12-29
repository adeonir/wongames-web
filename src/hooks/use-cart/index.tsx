import { createContext, ReactNode, useContext } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type CartContextType = {}

export const CartContextDefaultValues = {}

export const CartContext = createContext<CartContextType>(
  CartContextDefaultValues
)

type CartProviderProps = {
  children: ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
