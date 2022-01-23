import { CartItem } from 'hooks'

type PaymentIntentProps = {
  items: CartItem[]
  token: string
}

export const createPaymentIntent = async ({
  items,
  token,
}: PaymentIntentProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/create-payment-intent`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ cart: items }),
    }
  )

  return await response.json()
}
