import { Base } from 'templates/Base'

import { GameInfo, GameInfoProps } from 'components/GameInfo'
import { Gallery, GalleryImageProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'
import { GameDetails, GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { ShowCase } from 'components/ShowCase'

export type GameTemplateProps = {
  cover: string
  info: GameInfoProps
  gallery?: GalleryImageProps[]
  content: string
  details: GameDetailsProps
  upcoming: GameCardProps[]
  highlight: HighlightProps
  recommended: GameCardProps[]
}

export const Game = ({
  cover,
  info,
  gallery,
  content,
  details,
  upcoming,
  highlight,
  recommended,
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

      <ShowCase heading="Upcoming" games={upcoming} highlight={highlight} />
      <ShowCase heading="You may like these games" games={recommended} />
    </S.GameContainer>
  </Base>
)
