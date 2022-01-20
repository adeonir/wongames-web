import { ReactNode } from 'react'
import { MockedProvider } from '@apollo/client/testing'

import { useWishliat, WishlistProvider } from 'hooks/use-wishlist'
import { renderHook } from '@testing-library/react-hooks'

import { wishlistMock } from './mock'

describe('useWishliat', () => {
  it('should return the wishlist items', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <MockedProvider mocks={[wishlistMock]}>
        <WishlistProvider>{children}</WishlistProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useWishliat(), { wrapper })
  })
})
