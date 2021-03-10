import { Heading, Logo } from 'components'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

export const Auth = ({ title, children }: AuthProps) => (
  <S.AuthContainer>
    <S.Banner>
      <S.BannerWrapper>
        <Logo id="banner" />

        <div>
          <Heading size="huge">
            All your favorite <br /> games in one place
          </Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>
        <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
      </S.BannerWrapper>
    </S.Banner>

    <S.Content>
      <S.ContentWrapper>
        <Logo id="content" color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.AuthContainer>
)
