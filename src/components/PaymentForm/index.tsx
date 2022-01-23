import { useEffect, useState } from 'react'
import { CardElement } from '@stripe/react-stripe-js'
import { StripeCardElementChangeEvent } from '@stripe/stripe-js'
import { ErrorOutline, ShoppingCart } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import { useCart } from 'hooks'

import * as S from './styles'
import { createPaymentIntent } from 'utils/stripe'
import { Session } from 'next-auth'

type PaymentFormProps = {
  session: Session
}

const PaymentForm = ({ session }: PaymentFormProps) => {
  const { items } = useCart()

  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [clientSecret, setClientSecret] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [freeGames, setFreeGames] = useState(false)

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length) {
        const data = await createPaymentIntent({
          items,
          token: session.jwt as string,
        })

        if (data.freeGames) {
          setFreeGames(true)
          console.info(data.freeGames)
          return
        }

        if (data.error) {
          setError(data.error)
          return
        }

        setClientSecret(data.clientSecret)
        console.info(data.clientSecret)
      }
    }

    setPaymentMode()
  }, [items, session])

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : null)
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: { fontSize: '16px' },
            },
          }}
          onChange={handleChange}
        />

        {error && (
          <S.Error>
            <ErrorOutline size={16} />
            {error}
          </S.Error>
        )}
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          disabled={disabled || !!error}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentForm
