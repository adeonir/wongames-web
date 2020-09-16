import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const modifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
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
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 4rem;

    svg {
      width: ${theme.font.sizes.medium};
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    height: 5rem;

    svg {
      width: ${theme.font.sizes.large};
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg + span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `,
}

export const ButtonContainer = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background-image: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    cursor: pointer;
    position: relative;
    z-index: ${theme.layers.base};
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:before {
      background-image: linear-gradient(180deg, #e35565 0%, #d958a6 50%);
      content: '';
      border-radius: inherit;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }

    ${!!size && modifiers[size](theme)}
    ${!!fullWidth && modifiers.fullWidth}
    ${!!hasIcon && modifiers.withIcon(theme)}
  `};
`
