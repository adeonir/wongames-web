import { BannerContainer } from 'components/Banner/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const BannerSliderContainer = styled.div`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        background: ${theme.colors.white};
        margin: 0 ${theme.spacings.xxsmall};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }
      button {
        width: 1.2rem;
        height: 1.2rem;
        opacity: 0;
        cursor: pointer;
      }
    }
    ${media.greaterThan('large')`
      ${BannerContainer} {
        max-width: 104rem;
        margin: 0 auto;
      }
      .slick-dots {
        flex-direction: column;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
