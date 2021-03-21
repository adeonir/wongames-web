import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { HeadingContainer } from 'components/Heading/styles'
import { LogoContainer } from 'components/Logo/styles'

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

export const Banner = styled.div`
  background-image: url(/img/auth-banner.png);
  background-size: cover;
  background-position: center;
  position: relative;
  color: ${theme.colors.white};
  padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
    ${theme.spacings.large};

  ${media.lessThan('medium')`
    display: none;
  `}

  &::after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${theme.colors.black};
    opacity: 0.85;
  }
`

export const BannerWrapper = styled.div`
  position: relative;
  z-index: ${theme.layers.base};
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  height: 100%;

  ${HeadingContainer} {
    line-height: calc(${theme.font.sizes.huge} + 1rem);
  }

  a {
    width: fit-content;
    height: fit-content;
  }
`

export const Subtitle = styled.h3`
  font-size: ${theme.font.sizes.xxlarge};
  font-weight: ${theme.font.light};
  margin-top: ${theme.spacings.small};

  strong {
    color: ${theme.colors.primary};
  }
`

export const Footer = styled.p`
  align-self: end;
  text-align: center;
  font-size: ${theme.font.sizes.small};
`

export const Content = styled.div`
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentWrapper = styled.div`
  width: 30rem;

  ${media.greaterThan('medium')`
    width: 36rem;
  `}

  ${LogoContainer} {
    margin: 0 auto ${theme.spacings.xxlarge};
  }

  ${HeadingContainer} {
    margin-bottom: ${theme.spacings.medium};
  }
`
