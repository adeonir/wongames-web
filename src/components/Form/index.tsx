import { darken } from 'polished'
import styled from 'styled-components'

import { theme } from 'styles'

import { ButtonContainer } from 'components/Button/styles'
import { TextFieldContainer } from 'components/TextField/styles'

export const FormContainer = styled.div`
  ${TextFieldContainer} {
    margin: ${theme.spacings.xxsmall} 0;
  }

  ${ButtonContainer} {
    margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
  }
`

export const FormLink = styled.div`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  text-align: center;

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    border-bottom: 0.1rem solid ${theme.colors.secondary};
    transition: color, border, ${theme.transition.fast};

    &:hover {
      color: ${darken(0.1, theme.colors.secondary)};
      border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
    }
  }
`
