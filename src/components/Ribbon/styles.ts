import { shade } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { RibbonColors, RibbonProps } from '.'

const modifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::after {
      border-left-color: ${shade(0.2, theme.colors[color])};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    right: -1.6rem;

    &::after {
      bottom: -0.8rem;
      border-bottom-width: 0.8rem;
      border-left-width: 1.6rem;
    }
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    right: -2rem;

    &::after {
      bottom: -1rem;
      border-bottom-width: 1rem;
      border-left-width: 2rem;
    }
  `,
}

export const RibbonContainer = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors.white};
    padding: 0 ${theme.spacings.small};
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 3rem;

    &::after {
      background: ;
      content: '';
      display: block;
      width: 0;
      height: 0;

      position: absolute;
      right: 0;
      border: 0 solid transparent;
    }

    ${!!color && modifiers.color(theme, color)}
    ${!!size && modifiers[size](theme)}
  `}
`
