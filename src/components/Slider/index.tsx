import { default as Slick, Settings } from 'react-slick'

import { SliderContainer } from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => (
  <SliderContainer>
    <Slick {...settings}>{children}</Slick>
  </SliderContainer>
)
