import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Button, Logo } from 'components'
import React, { useState } from 'react'

import {
  FullMenu,
  IconWrapper,
  MenuContainer,
  MenuGroup,
  MenuLink,
  MenuNav,
  RegisterBox,
  SignUpLink,
} from './styles'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <MenuContainer>
      <IconWrapper>
        <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
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

      <FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>

        <RegisterBox>
          <Button size="large" fullWidth>
            Sign in
          </Button>
          <span>or</span>
          <SignUpLink href="#" title="Sign up">
            Sign up
          </SignUpLink>
        </RegisterBox>
      </FullMenu>
    </MenuContainer>
  )
}
