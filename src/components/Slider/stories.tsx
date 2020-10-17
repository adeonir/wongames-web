import { Meta, Story } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'

import { Slider } from '.'

export default {
  title: 'Slider',
  component: Slider,
} as Meta

const horizontal: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}

const Slide = styled.div`
  background: #eee;
  border: 0.1rem solid #666;
  width: 30rem;
  padding: 10rem 0;
  text-align: center;
`

export const Horizontal: Story = () => (
  <Slider settings={horizontal}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)

const vertical: Settings = {
  vertical: true,
  verticalSwiping: true,
  speed: 500,
  dots: false,
  infinite: false,
  slidesToShow: 1,
}

export const Vertical: Story = () => (
  <Slider settings={vertical}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
)
