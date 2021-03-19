import { lighten } from 'polished'
import styled from 'styled-components'

import { theme } from 'styles'

export const ForgotPassword = styled.a`
  display: block;
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  text-decoration: none;
  text-align: right;

  &:hover {
    color: ${lighten(0.2, theme.colors.black)};
  }
`
