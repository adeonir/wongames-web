import styled from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

export const SectionFooter = styled.section`
  margin-top: ${theme.spacings.large};
  padding-bottom: ${theme.spacings.xsmall};
  padding-top: ${theme.spacings.xxlarge};
  background-color: ${theme.colors.white};
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

  ${media.greaterThan('medium')`
    padding-top: calc(${theme.spacings.xxlarge} * 2);
    clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
  `}
`
