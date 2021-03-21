import { useMemo } from 'react'

import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import { Heading } from 'components/Heading'
import { MediaMatch } from 'components/MediaMatch'

import * as S from './styles'

type Platform = 'linux' | 'mac' | 'windows'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  publisher: string
  releaseDate: string
  platforms: Platform[]
  rating: Rating
  genres: string[]
}

export const GameDetails = ({
  developer,
  publisher,
  releaseDate,
  platforms,
  rating,
  genres,
}: GameDetailsProps) => {
  const platformIcon = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />,
  }

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(new Date(releaseDate))
  }, [releaseDate])

  const formattedRating = useMemo(() => {
    return rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`
  }, [rating])

  const formattedGenres = useMemo(() => {
    return genres.join(' / ')
  }, [genres])

  return (
    <S.GameDetailsContainer>
      <MediaMatch greaterThan="small">
        <Heading lineColor="secondary" lineLeft>
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <div>
          <S.Label>Developer</S.Label>
          <S.Title>{developer}</S.Title>
        </div>

        <div>
          <S.Label>Release Date</S.Label>
          <S.Title>{formattedDate}</S.Title>
        </div>

        <div>
          <S.Label>Platforms</S.Label>
          <S.IconGroup>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcon[icon]}</S.Icon>
            ))}
          </S.IconGroup>
        </div>

        <div>
          <S.Label>Publisher</S.Label>
          <S.Title>{publisher}</S.Title>
        </div>

        <div>
          <S.Label>Rating</S.Label>
          <S.Title>{formattedRating}</S.Title>
        </div>

        <div>
          <S.Label>Genres</S.Label>
          <S.Title>{formattedGenres}</S.Title>
        </div>
      </S.Content>
    </S.GameDetailsContainer>
  )
}
