import { ReactNode } from 'react'
import { MockedProvider } from '@apollo/client/testing'

import { useWishliat, WishlistProvider } from 'hooks/use-wishlist'
import { renderHook } from '@testing-library/react-hooks'

import { wishlistItems, wishlistMock } from './mock'

const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'loren@ipsum.com' } }
useSession.mockImplementation(() => [session])

describe('useWishliat', () => {
  it('should return the wishlist items', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishliat(), {
      wrapper,
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual([
      wishlistItems[0],
      wishlistItems[1],
    ])
  })

  it('should check if the game is in wishlist', async () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result, waitForNextUpdate } = renderHook(() => useWishliat(), {
      wrapper,
    })

    await waitForNextUpdate()

    expect(result.current.isInWishlist('1')).toBe(true)
    expect(result.current.isInWishlist('2')).toBe(true)
    expect(result.current.isInWishlist('3')).toBe(false)
  })
})
