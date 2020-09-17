import { Heading, Logo } from 'components'
import Link from 'next/link'

import { Column, Content, Copy, FooterContainer } from './styles'

export const Footer = () => (
  <FooterContainer>
    <Logo color="black" />

    <Content>
      <Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Contact
        </Heading>

        <a href="mailto:sac@example.com">sac@example.com</a>
        <a href="+551122223333">+55 11 2222-3333</a>
      </Column>

      <Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="#">Home</Link>
          <Link href="#">Store</Link>
          <Link href="#">Search</Link>
        </nav>
      </Column>

      <Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </Column>

      <Column>
        <Heading color="black" size="small" lineColor="secondary" lineBottom>
          Location
        </Heading>

        <nav aria-labelledby="footer resources">
          <span>Adams Street</span>
          <span>587 - 11222-000</span>
          <span>Lorem Ipsum/Brasil</span>
        </nav>
      </Column>
    </Content>

    <Copy>Won Games 2020 © All rights reserved</Copy>
  </FooterContainer>
)
