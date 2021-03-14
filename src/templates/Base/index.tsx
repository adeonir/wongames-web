import { ReactNode } from 'react'

import { Container, Footer, Menu } from 'components'

import * as S from './styles'

export type BaseProps = {
  children: ReactNode
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
