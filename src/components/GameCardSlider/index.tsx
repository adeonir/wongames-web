import { Slider } from 'components'
import { GameCard, GameCardProps } from 'components/GameCard'
import { SliderSettings } from 'components/Slider'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
} from 'styled-icons/material-outlined'

import { GameCardSliderContainer } from './styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="Next games" />,
  prevArrow: <ArrowLeft aria-label="Previous games" />,
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

export const GameCardSlider = ({
  items,
  color = 'white',
}: GameCardSliderProps) => (
  <GameCardSliderContainer color={color}>
    <Slider settings={settings}>
      {items.map((item) => (
        <GameCard key={item.title} {...item} />
      ))}
    </Slider>
  </GameCardSliderContainer>
)
