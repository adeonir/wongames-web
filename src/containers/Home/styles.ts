import { HeadingContainer } from 'components/Heading/styles'
import { HighlightContainer } from 'components/Highlight/styles'
import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

export const SectionBanner = styled.section`
  margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

  ${media.greaterThan('medium')`
    margin: ${theme.spacings.large} 0;
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const SectionNews = styled.div`
  margin-bottom: calc(${theme.spacings.xxlarge} * 2);

  ${media.greaterThan('large')`
    margin-top: -13rem;
  `}

  ${media.greaterThan('medium')`
    margin-bottom: 0;
    padding-top: 14rem;
    padding-bottom: 10rem;
    background-color: ${theme.colors.lightBackground};
    clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

    ${HeadingContainer} {
      color: ${theme.colors.black};
    }
  `}
`

export const SectionUpcoming = styled.div`
  ${HighlightContainer} {
    margin-top: calc(${theme.spacings.xlarge} * 2);
  }
`
