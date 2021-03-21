import { forwardRef } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = forwardRef<SlickSlider, SliderProps>(
  ({ children, settings }, ref) => (
    <S.SliderContainer>
      <SlickSlider {...settings} ref={ref}>
        {children}
      </SlickSlider>
    </S.SliderContainer>
  )
)
