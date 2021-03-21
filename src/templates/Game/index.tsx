import { Base } from 'templates/Base'

import { GameInfo, GameInfoProps } from 'components/GameInfo'

import * as S from './styles'
import { Gallery, GalleryImageProps } from 'components/Gallery'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
}

export const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.GameContainer>
      <S.GameInfoSection>
        <GameInfo {...gameInfo} />
      </S.GameInfoSection>

      {!!gallery && (
        <S.GallerySection>
          <Gallery items={gallery} />
        </S.GallerySection>
      )}
    </S.GameContainer>
  </Base>
)
