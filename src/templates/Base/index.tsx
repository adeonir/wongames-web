import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => (
  <S.BaseContainer>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.Footer>
      <Container>
        <Footer />
      </Container>
    </S.Footer>
  </S.BaseContainer>
)
