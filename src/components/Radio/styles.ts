import styled, { css } from 'styled-components'

import { theme } from 'styles'

import { RadioProps } from '.'

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 0.2rem solid ${theme.colors.gray};
  transition: background border ${theme.transition.fast};
  background: transparent;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${theme.colors.primary};
    transition: opacity ${theme.transition.fast};
    opacity: 0;
  }

  &:focus {
    box-shadow: 0 0 0.5rem ${theme.colors.primary};
  }

  &:checked {
    border-color: ${theme.colors.primary};

    &::before {
      opacity: 1;
    }
  }
`

export const Label = styled.label<Pick<RadioProps, 'labelColor'>>`
  ${({ labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`
