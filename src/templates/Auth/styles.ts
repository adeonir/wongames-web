import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'

export const AuthContainer = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  height: 100vh;

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    background-image: url(/assets/auth-banner.png);
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
  `}
`

export const BannerWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;

    ${HeadingStyles.HeadingContainer} {
      line-height: calc(${theme.font.sizes.huge} + 1rem);
    }

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.small};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    align-self: end;
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.LogoContainer} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.HeadingContainer} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
