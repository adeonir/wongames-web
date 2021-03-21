import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { theme } from 'styles'

export const GalleryContainer = styled.div`
  .slick-prev,
  .slick-next {
    display: block;
    color: ${theme.colors.white};
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0;
    transform: translate(0, -50%);
  }

  .slick-prev {
    left: -${theme.spacings.xxlarge};
  }

  .slick-next {
    right: -${theme.spacings.xxlarge};
  }

  .slick-prev.slick-disabled,
  .slick-next.slick-disabled {
    visibility: hidden;
  }

  .slick-slide > div {
    margin: 0 ${theme.spacings.xsmall};
    cursor: pointer;
  }

  .slick-list {
    margin: 0 -${theme.spacings.xsmall};
  }

  ${media.lessThan('huge')`
    overflow-x: hidden;
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `,
}

export const Modal = styled.div<ModalProps>`
  ${({ isOpen }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${rgba(theme.colors.black, 0.5)};
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen && modifiers.open}
    ${!isOpen && modifiers.close}
  `}
`

export const Close = styled.div`
  color: ${theme.colors.white};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  padding: ${theme.spacings.xsmall};
  text-align: right;
`
