import { Base } from 'templates/Base'

import { GameInfo, GameInfoProps } from 'components/GameInfo'
import { Gallery, GalleryImageProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'
import { GameDetails, GameDetailsProps } from 'components/GameDetails'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  info: GameInfoProps
  gallery?: GalleryImageProps[]
  content: string
  details: GameDetailsProps
}

export const Game = ({
  cover,
  info,
  gallery,
  content,
  details,
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.GameContainer>
      <S.InfoSection>
        <GameInfo {...info} />
      </S.InfoSection>

      {!!gallery && (
        <S.GallerySection>
          <Gallery items={gallery} />
        </S.GallerySection>
      )}

      <S.DescriptionSection>
        <TextContent title="Description" content={content} />
      </S.DescriptionSection>

      <S.DetailsSection>
        <GameDetails {...details} />
      </S.DetailsSection>
    </S.GameContainer>
  </Base>
)
