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

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    height: 5rem;

    svg {
      width: ${theme.font.sizes.large};

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
}

export const ButtonContainer = styled.button<ContainerProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    cursor: pointer;

    ${!!size && modifiers[size](theme)}
    ${!!fullWidth && modifiers.fullWidth}
    ${!!hasIcon && modifiers.withIcon}
  `};
`
