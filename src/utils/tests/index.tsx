import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import {
  CartContext,
  CartContextProps,
  CartContextDefaultValues,
} from 'hooks/use-cart'

import {
  WishlistContext,
  WishlistContextProps,
  WishlistContextDefaultValues,
} from 'hooks/use-wishlist'

import { theme } from 'styles'

type CustomRenderProps = {
  cartProviderProps?: CartContextProps
  wishlistProviderProps?: WishlistContextProps
} & Omit<RenderOptions, 'queries'>

const customRender = (
  children: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    wishlistProviderProps = WishlistContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        <WishlistContext.Provider value={wishlistProviderProps}>
          {children}
        </WishlistContext.Provider>
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
