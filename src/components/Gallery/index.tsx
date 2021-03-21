import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
} from '@styled-icons/material-outlined'

import { Slider, SliderSettings } from 'components/Slider'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
  nextArrow: <ArrowRight aria-label="Next image" />,
  prevArrow: <ArrowLeft aria-label="Previous image" />,
}

export type GalleryProps = {
  items: ImageProps[]
}

type ImageProps = {
  src: string
  alt: string
}

export const Gallery = ({ items }: GalleryProps) => (
  <S.GalleryContainer>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          role="button"
          key={`thumb-${index}`}
          src={item.src}
          alt={`Thumbnail - ${item.alt}`}
        />
      ))}
    </Slider>
  </S.GalleryContainer>
)
