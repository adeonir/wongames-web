import styled, { css } from 'styled-components'

import { CheckboxProps } from '.'

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.gray};
    position: relative;
    transition: background border ${theme.transition.fast};

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: 0.1rem;
      transform: rotate(45deg);
      transition: background border ${theme.transition.fast};
      opacity: 0;
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      background: ${theme.colors.primary};
      border-color: ${theme.colors.primary};

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`
