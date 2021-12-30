import { MockedProvider } from '@apollo/client/testing'
import { act } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

import { getStorageItem, setStorageItem } from 'utils/storage'

import { cartItems, gamesMock } from './mock'

import { useCart, CartProvider, CartProviderProps } from '.'

beforeEach(() => {
  window.localStorage.clear()
})

describe('useCart', () => {
  it('should return items if there are any item in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.loading).toBe(false)

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toBe(2)
    expect(result.current.total).toBe('$21.00')
  })

  it('should return true/false if the item is already in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper,
    })

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })

  it('should add item in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper,
    })

    act(() => {
      result.current.addToCart('1')
    })

    expect(result.current.quantity).toBe(1)
    expect(window.localStorage.getItem('WONGAMES_cartItem')).toBe(
      JSON.stringify(['1'])
    )
  })

  it('should remove item in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper,
    })

    act(() => {
      result.current.removeFromCart('1')
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItem')).toBe(
      JSON.stringify([])
    )
  })

  it('should clear all items from cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItem', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper,
    })

    act(() => {
      result.current.clearCart()
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItem')).toBe(
      JSON.stringify([])
    )
  })
})
