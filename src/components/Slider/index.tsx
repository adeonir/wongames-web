import { default as Slick, Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => (
  <S.SliderContainer>
    <Slick {...settings}>{children}</Slick>
  </S.SliderContainer>
)
