import styled, { css, DefaultTheme } from 'styled-components'

import { RibbonColors, RibbonProps } from '.'

const modifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,
}

export const RibbonContainer = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!color && modifiers.color(theme, color)}
    ${!!size && modifiers[size](theme)}
  `}
`
