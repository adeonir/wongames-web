import { render, screen } from 'utils/tests'

import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

import WishlistButton from '.'

const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
const session = { jwt: '123', user: { email: 'loren@ipsum.com' } }
useSession.mockImplementation(() => [session])

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button to remove to wishlist', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with add to withlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with remove from withlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render if not logged', () => {
    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.queryByText(/remove from wishlist/i)).not.toBeInTheDocument()
  })
})
