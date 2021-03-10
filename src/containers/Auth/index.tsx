import { Heading, Logo } from 'components'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

export const Auth = ({ title, children }: AuthProps) => (
  <S.AuthContainer>
    <S.Banner>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>
      <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
    </S.Banner>

    <S.Content>
      <Logo color="black" size="large" />
      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.AuthContainer>
)
