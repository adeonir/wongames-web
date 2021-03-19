import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

import { LogoProps } from '.'

const modifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideLabel: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `,
}

export const LogoContainer = styled.div<LogoProps>`
  ${({ color, size, hideLabel }) => css`
    color: ${theme.colors[color!]};

    ${!!size && modifiers[size]};
    ${!!hideLabel && modifiers.hideLabel};
  `};
`
