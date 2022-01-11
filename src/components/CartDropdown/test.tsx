import { render, screen } from 'utils/tests'

import items from 'components/CartList/mock'
import { CartContextDefaultValues } from 'hooks'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 330,00',
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it('should render <CartIcon /> and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
    expect(screen.getByText(`${items[0].title}`)).toBeInTheDocument()
  })
})
