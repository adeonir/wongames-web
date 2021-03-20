import { darken, rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { theme } from 'styles'

import { ButtonProps } from '.'

export type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'variant' | 'fullWidth'>

const modifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
    height: 3rem;

    svg {
      width: ${theme.font.sizes.small};

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    height: 4rem;

    svg {
      width: ${theme.font.sizes.medium};
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 5rem;

    svg {
      width: ${theme.font.sizes.large};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    border: 0.1rem solid transparent;
    color: ${theme.colors.white};

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
    }
  `,
  ghost: (theme: DefaultTheme) => css`
    background: none;
    border: 0.1rem solid transparent;
    color: ${theme.colors.primary};

    &:hover {
      border: 0.1rem solid ${rgba(theme.colors.primary, 0.1)};
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
    }

    svg + span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
}

export const ButtonContainer = styled.button<ContainerProps>`
  ${({ size, variant, fullWidth, hasIcon }) => css`
    border-radius: ${theme.border.radius};
    cursor: pointer;
    position: relative;
    z-index: ${theme.layers.base};
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    ${!!size && modifiers[size](theme)}
    ${!!variant && modifiers[variant](theme)}
    ${!!fullWidth && modifiers.fullWidth}
    ${!!hasIcon && modifiers.withIcon(theme)}
  `};
`
