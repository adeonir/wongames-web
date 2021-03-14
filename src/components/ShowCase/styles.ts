import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components'

import { GameCardSliderContainer } from 'components/GameCardSlider/styles'
import { HeadingContainer } from 'components/Heading/styles'
import { HighlightContainer } from 'components/Highlight/styles'

export const ShowCaseContainer = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    ${HeadingContainer},
    ${HighlightContainer},
    ${GameCardSliderContainer} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightContainer} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderContainer} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`
