import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Logo } from 'components'

import { IconWrapper, MenuContainer, MenuGroup } from './styles'

export const Menu = () => (
  <MenuContainer>
    <IconWrapper>
      <MenuIcon aria-label="Open menu" />
    </IconWrapper>

    <Logo hideLabel />

    <MenuGroup>
      <IconWrapper>
        <SearchIcon aria-label="Search" />
      </IconWrapper>
      <IconWrapper>
        <ShoppingCartIcon aria-label="Open shopping cart" />
      </IconWrapper>
    </MenuGroup>
  </MenuContainer>
)
