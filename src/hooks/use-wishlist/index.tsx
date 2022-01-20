import { GameCardProps } from 'components/GameCard'
import { createContext, ReactNode, useContext } from 'react'

type WishlistContextProps = {
  items?: GameCardProps[]
  loading?: boolean
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  loading: false,
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
}

export const WishlistContext = createContext<WishlistContextProps>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const isInWishlist = (id: string) => false
  const addToWishlist = (id: string) => null
  const removeFromWishlist = (id: string) => null

  return (
    <WishlistContext.Provider
      value={{
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishliat = () => useContext(WishlistContext)

export { WishlistProvider, useWishliat }
