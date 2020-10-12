import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { HighlightProps } from '.'

type ContainerProps = Pick<HighlightProps, 'backgroundImage' | 'floatPosition'>

const modifiers = {
  left: () => css`
    grid-template-areas: 'float-image content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
  right: () => css`
    grid-template-areas: 'content float-image';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
      justify-self: end;
    }
  `,
}

export const HighlightContainer = styled.section<ContainerProps>`
  ${({ theme, backgroundImage, floatPosition }) => css`
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 23rem;
    display: grid;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${rgba(theme.colors.black, 0.6)};
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}

    ${modifiers[floatPosition!]()}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    grid-area: float-image;
    align-self: end;
    padding: 0 ${theme.spacings.xxsmall};
    max-width: 100%;
    max-height: 23rem;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      padding: 0 ${theme.spacings.small};
      max-height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    padding: ${theme.spacings.xsmall};
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.large};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.large};
    `}
  `}
`
