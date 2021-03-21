import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { HeadingProps, LineColors } from '.'

export const modifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      bottom: -0.4rem;
      width: 3rem;
      border-bottom-width: 0.4rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.3rem;
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
}

export const HeadingContainer = styled.h2<HeadingProps>`
  ${({ color, size, lineColor, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && modifiers.lineLeft(theme, lineColor!)};
    ${lineBottom && modifiers.lineBottom(theme, lineColor!)};
    ${!!size && modifiers[size](theme)};
  `};
`
