import { Base } from 'templates/Base'

import { GameInfo, GameInfoProps } from 'components/GameInfo'

import * as S from './styles'
import { Gallery, GalleryImageProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'

export type GameTemplateProps = {
  cover: string
  info: GameInfoProps
  gallery?: GalleryImageProps[]
  content: string
}

export const Game = ({ cover, info, gallery, content }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.GameContainer>
      <S.GameInfoSection>
        <GameInfo {...info} />
      </S.GameInfoSection>

      {!!gallery && (
        <S.GallerySection>
          <Gallery items={gallery} />
        </S.GallerySection>
      )}

      <S.DescriptionSection>
        <TextContent title="Description" content={content} />
      </S.DescriptionSection>
    </S.GameContainer>
  </Base>
)
