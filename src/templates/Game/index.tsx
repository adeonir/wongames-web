import { Base } from 'templates/Base'

import * as S from './styles'

export type GameTemplateProps = {
  children: React.ReactNode
  cover: string
}

export const Game = ({ children, cover }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.GameContainer>{children}</S.GameContainer>
  </Base>
)
