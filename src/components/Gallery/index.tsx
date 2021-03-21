import { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'

import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close,
} from '@styled-icons/material-outlined'

import { Slider, SliderSettings } from 'components/Slider'

import * as S from './styles'

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="Next image" />,
  prevArrow: <ArrowLeft aria-label="Previous image" />,
}

const thumbSettings: SliderSettings = {
  ...settings,
  slidesToShow: 4,
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
}

const modalSettings: SliderSettings = {
  ...settings,
  slidesToShow: 1,
}

export type GalleryProps = {
  items: ImageProps[]
}

type ImageProps = {
  src: string
  alt: string
}

export const Gallery = ({ items }: GalleryProps) => {
  const sliderRef = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.GalleryContainer>
      <Slider settings={thumbSettings} ref={sliderRef}>
        {items.map((item, index) => (
          <img
            role="button"
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumbnail - ${item.alt}`}
            onClick={() => {
              setIsOpen(true)
              sliderRef.current!.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={28} />
        </S.Close>

        <S.Content>
          <Slider settings={modalSettings} ref={sliderRef}>
            {items.map((item, index) => (
              <img key={`slide-${index}`} src={item.src} alt={`${item.alt}`} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.GalleryContainer>
  )
}
