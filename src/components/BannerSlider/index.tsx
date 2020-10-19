import { Banner, Slider } from 'components'
import { BannerProps } from 'components/Banner'
import { SliderSettings } from 'components/Slider'

import { BannerSliderContainer } from './styles'

export type BannerSliderProps = {
  items: BannerProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,

  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
}

export const BannerSlider = ({ items }: BannerSliderProps) => (
  <BannerSliderContainer>
    <Slider settings={settings}>
      {items.map((item) => (
        <Banner key={item.title} {...item} />
      ))}
    </Slider>
  </BannerSliderContainer>
)
