import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type TextFieldContainer = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

type IconProps = {
  hasIcon?: boolean
} & IconPositionProps

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lighterGray};
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.lighterGray};
    padding: 0 ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconProps>`
  ${({ theme, hasIcon, iconPosition }) => css`
    border: 0;
    background: transparent;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray};
    }

    ${!!hasIcon &&
    css`
      padding-${iconPosition}: ${theme.spacings.xxsmall};
    `}
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    order: ${iconPosition === 'left' ? 0 : 1};

    & > svg {
      fill: ${theme.colors.gray};
      width: 100%;
    }
  `}
`

export const ErrorMessage = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const modifier = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.lightGray};

      svg {
        fill: currentColor;
      }

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.danger};
    }

    ${Icon} svg {
      fill: ${theme.colors.danger};
    }

    ${InputWrapper} {
      border-color: ${theme.colors.danger};
    }
  `,
}

export const TextFieldContainer = styled.div<TextFieldContainer>`
  ${({ theme, disabled, error }) => css`
    ${error && modifier.error(theme)}
    ${disabled && modifier.disabled(theme)}
  `}
`
