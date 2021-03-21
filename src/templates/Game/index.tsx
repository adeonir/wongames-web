import { Base } from 'templates/Base'

import * as S from './styles'

export type GameProps = {
  children: React.ReactNode
}

export const Game = ({ children }: GameProps) => (
  <Base>
    <S.GameContainer>{children}</S.GameContainer>
  </Base>
)
