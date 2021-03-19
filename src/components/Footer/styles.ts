import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { HeadingContainer } from 'components/Heading/styles'

export const FooterContainer = styled.footer`
  ${HeadingContainer} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  display: grid;
  gap: ${theme.grid.gutter};
  margin-top: ${theme.spacings.medium};
  grid-template-columns: repeat(2, 1fr);

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
    `}
`

export const Column = styled.div`
  a,
  span {
    display: block;
    color: ${theme.colors.gray};
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const Copy = styled.div`
  color: ${theme.colors.gray};
  margin-top: ${theme.spacings.large};
  margin-bottom: ${theme.spacings.medium};
  font-size: ${theme.font.sizes.xsmall};
  text-align: center;
`
