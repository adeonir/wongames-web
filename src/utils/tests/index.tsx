import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import {
  CartContext,
  CartContextProps,
  CartContextDefaultValues,
} from 'hooks/use-cart'

import { theme } from 'styles'

type CustomRenderProps = {
  cartProviderProps?: CartContextProps
} & Omit<RenderOptions, 'queries'>

const customRender = (
  children: ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {children}
      </CartContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
