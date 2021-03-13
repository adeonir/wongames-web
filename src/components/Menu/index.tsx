import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Button, Logo, MediaMatch } from 'components'
import Link from 'next/link'
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

export type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContainer>
      <MediaMatch lessThan="medium">
        <IconWrapper>
          <MenuIcon aria-label="Open menu" onClick={() => setIsOpen(true)} />
        </IconWrapper>
      </MediaMatch>

      <Logo hideLabel />

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCartIcon aria-label="Open shopping cart" />
        </IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </MenuGroup>

      <FullMenu aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close menu" onClick={() => setIsOpen(false)} />

        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>

          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>

        {!username && (
          <RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" size="large" fullWidth>
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up">
              <SignUpLink title="Sign up">Sign up</SignUpLink>
            </Link>
          </RegisterBox>
        )}
      </FullMenu>
    </MenuContainer>
  )
}
