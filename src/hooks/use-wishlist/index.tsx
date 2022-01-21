import { useMutation } from '@apollo/client'
import { GameCardProps } from 'components/GameCard'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST,
} from 'graphql/mutations'
import { useQueryWishlist } from 'graphql/queries'
import { QueryWishlist_wishlists_games } from 'graphql/types'
import { useSession } from 'next-auth/client'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { gamesMapper } from 'utils/mappers'

export type WishlistContextProps = {
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
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data.createWishlist.wishlist.games || [])
        setWishlistId(data.createWishlist.wishlist.id)
      },
    }
  )

  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data.updateWishlist.wishlist.games || [])
      },
    }
  )

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string,
    },
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0].games || [])
    setWishlistId(data?.wishlists[0].id)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((game) => game.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { games: [...wishlistIds, id] } } },
      })
    }

    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: [...wishlistIds, id] },
        },
      },
    })
  }

  const removeFromWishlist = (id: string) => {
    updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            games: wishlistIds.filter((gameId: string) => gameId !== id),
          },
        },
      },
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingCreate || loadingUpdate || loadingQuery,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
