import { ReactNode } from 'react'
import { Session } from 'next-auth'
import { render, screen, waitFor } from 'utils/tests'

import { CartContextDefaultValues, CartContextProps } from 'hooks'

import items from 'components/CartList/mock'

import * as StripeMethods from 'utils/stripe'

import PaymentForm from './'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  push: jest.fn(),
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  },
}))

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock CardElement">{children}</div>
  },
  Elements: function Mock({ children }: { children: ReactNode }) {
    return <div data-testid="Mock Elements">{children}</div>
  },
  useStripe: jest.fn().mockReturnValue({
    confirmCardPayment: jest.fn().mockResolvedValue({
      paymentMethod: {
        card: 'card',
      },
    }),
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn(),
  }),
}))

const createPaymentIntent = jest.spyOn(StripeMethods, 'createPaymentIntent')

describe('<PaymentForm />', () => {
  let session: Session
  let cartProviderProps: CartContextProps

  beforeEach(() => {
    session = {
      jwt: 'token',
      expires: '123',
      user: {
        email: 'won@games.com',
      },
    }

    cartProviderProps = {
      ...CartContextDefaultValues,
      items,
    }
  })

  it('should render correctly', () => {
    render(<PaymentForm session={session} />)

    expect(
      screen.getByRole('heading', { name: /payment/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId(/mock cardelement/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
  })

  it('should call createPayment when it renders and show free games if gets freeGames', async () => {
    createPaymentIntent.mockResolvedValueOnce({
      freeGames: true,
    })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByText(/only free games/i)).toBeInTheDocument()
    })
  })

  it('should call createPayment when it renders and throw if error', async () => {
    createPaymentIntent.mockResolvedValueOnce({
      error: 'Error message',
    })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByText(/error message/i)).toBeInTheDocument()
    })
  })
})
