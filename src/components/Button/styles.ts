import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type ContainerProps = Pick<ButtonProps, 'size'>

const modifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    height: 3rem;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    height: 4rem;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    height: 5rem;
  `,
}

export const ButtonContainer = styled.button<ContainerProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;

    ${!!size && modifiers[size](theme)}
  `};
`
