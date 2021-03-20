import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

export const GameDetailsContainer = styled.div`
  margin: ${theme.spacings.small} 0;
`

export const Content = styled.div`
  display: grid;
  gap: ${theme.spacings.xsmall};
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${theme.spacings.small};
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(3, 1fr);
  `}
  ${media.greaterThan('large')`
    grid-template-columns: repeat(6, 1fr);
  `}
`

export const Label = styled.h3`
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.light};
  color: ${theme.colors.lightGray};
`

export const Title = styled.p`
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.white};
`

export const IconGroup = styled.div`
  color: ${theme.colors.white};
`

export const Icon = styled.span`
  margin-right: ${theme.spacings.xxsmall};
`
