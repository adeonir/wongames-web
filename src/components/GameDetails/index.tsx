import { Heading, MediaMatch } from 'components'

import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import * as S from './styles'

type Platform = 'linux' | 'mac' | 'windows'

export type GameDetailsProps = {
  platforms: Platform[]
}

export const GameDetails = ({ platforms }: GameDetailsProps) => {
  const platformIcon = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Linux" size={18} />,
    windows: <Windows title="Linux" size={18} />,
  }

  return (
    <S.GameDetailsContainer>
      <MediaMatch greaterThan="small">
        <Heading lineColor="secondary" lineLeft>
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <div>
          <S.Title>Developer</S.Title>
          <S.Description>Gearbox Software</S.Description>
        </div>

        <div>
          <S.Title>Release</S.Title>
          <S.Description>Nov 16, 2019</S.Description>
        </div>

        <div>
          <S.Title>Platforms</S.Title>
          <S.IconGroup>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcon[icon]}</S.Icon>
            ))}
          </S.IconGroup>
        </div>

        <div>
          <S.Title>Publisher</S.Title>
          <S.Description>2K</S.Description>
        </div>

        <div>
          <S.Title>Ratings</S.Title>
          <S.Description>18+</S.Description>
        </div>

        <div>
          <S.Title>Genres</S.Title>
          <S.Description>Action / Adventure</S.Description>
        </div>
      </S.Content>
    </S.GameDetailsContainer>
  )
}
