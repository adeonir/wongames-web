import styled, { css } from 'styled-components'

export const TextFieldContainer = styled.div``

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};
    display: flex;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    border: 0;
    background: transparent;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`
