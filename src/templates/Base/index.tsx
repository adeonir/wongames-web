import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'

import * as S from './styles'

export type BaseProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseProps) => (
  <main>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </main>
)
