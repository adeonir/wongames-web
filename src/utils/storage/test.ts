import { getStorageItem, setStorageItem } from './'

beforeEach(() => {
  window.localStorage.clear()
})

describe('getStorageItem', () => {
  it('should return the item from local storage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItem',
      JSON.stringify(['1', '2', '3'])
    )

    expect(getStorageItem('cartItem')).toStrictEqual(['1', '2', '3'])
  })
})

describe('setStorageItem', () => {
  it('should add the item to local storage', () => {
    setStorageItem('cartItem', ['1', '2', '3'])

    expect(window.localStorage.getItem('WONGAMES_cartItem')).toStrictEqual(
      JSON.stringify(['1', '2', '3'])
    )
  })
})
