import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

import * as HeadingStyles from 'components/Heading/styles'

import { theme } from 'styles'
import { rgba } from 'polished'

export const GameContainer = styled.main`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
    margin-top: 30rem;
  `}
`

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    height: 40rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 60rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  margin-bottom: ${theme.spacings.xlarge};

  ${media.greaterThan('medium')`
    margin-bottom: calc(${theme.spacings.xlarge} * 2);
  `}
`

export const InfoSection = styled(Section)``

export const GallerySection = styled(Section)`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const DescriptionSection = styled(Section)`
  ${HeadingStyles.HeadingContainer} {
    margin-bottom: ${theme.spacings.medium};
  }

  .description__copyrights {
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.medium};
  }
`

export const DetailsSection = styled(Section)`
  padding-bottom: ${theme.spacings.large};
  border-bottom: 0.1rem solid ${rgba(theme.colors.darkGray, 0.7)};

  ${media.greaterThan('medium')`
    padding-bottom: ${theme.spacings.xxlarge};
  `}
`
