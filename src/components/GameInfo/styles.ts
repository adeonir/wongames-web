import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { HeadingContainer } from 'components/Heading/styles'
import { RibbonContainer } from 'components/Ribbon/styles'

export const GameInfoContainer = styled.div`
  position: relative;
  background: ${theme.colors.white};
  padding: ${theme.spacings.small};
  padding-top: ${theme.spacings.medium};

  ${RibbonContainer} {
    padding: 0 ${theme.spacings.xsmall};
    right: -1.2rem;

    &::after {
      border-left-width: 1.2rem;
    }
  }

  ${media.greaterThan('small')`
    padding: ${theme.spacings.large};
    padding-top: ${theme.spacings.medium};
  `}

  ${media.greaterThan('medium')`
    ${RibbonContainer} {
      border-radius: ${theme.border.radius};
      right: ${theme.spacings.large};
      top: ${theme.spacings.large};
      font-size: ${theme.font.sizes.large};

      &::after {
        border: 0;
      }
    }
  `}

  ${HeadingContainer} {
    margin-bottom: ${theme.spacings.xsmall};
  }
`

export const Description = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  margin-bottom: ${theme.spacings.small};

  ${media.greaterThan('medium')`
    max-width: 76rem;
  `}
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  button + button {
    margin-top: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      margin-top: 0;
      margin-right: ${theme.spacings.small};
    `}
  }

  ${media.greaterThan('medium')`
    flex-direction: row-reverse;
  `}
`
