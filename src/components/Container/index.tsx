import styled from 'styled-components'

import { theme } from 'styles'

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.grid.container};
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(${theme.grid.gutter} / 2);
  padding-right: calc(${theme.grid.gutter} / 2);
`
