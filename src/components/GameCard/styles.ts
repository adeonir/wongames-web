import { shade, tint } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { theme } from 'styles'

type PriceProps = {
  isPromotional?: boolean
}

const modifiers = {
  default: (theme: DefaultTheme) => css`
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    background: ${theme.colors.secondary};
    padding: 0 ${theme.spacings.xxsmall};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xsmall};
    text-decoration: line-through;
  `,
}

export const GameCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};
  position: relative;
`

export const ImageBox = styled.div`
  width: 100%;
  height: 14rem;
  background: ${shade(0.02, theme.colors.white)};
  background-image: linear-gradient(
    to right,
    ${shade(0.02, theme.colors.white)} 0%,
    ${tint(0.78, theme.colors.secondary)} 20%,
    ${shade(0.02, theme.colors.white)} 40%,
    ${shade(0.02, theme.colors.white)} 100%
  );
  background-size: 80rem 14rem;
  animation: shimmer 1s linear infinite forwards;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes shimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: ${theme.spacings.xsmall};
`

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`

export const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: ${theme.font.sizes.medium};
  line-height: ${theme.font.sizes.medium};
  font-weight: ${theme.font.bold};
`

export const Developer = styled.h4`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  font-weight: ${theme.font.normal};
`

export const FavButton = styled.div`
  color: ${theme.colors.primary};
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -0.5rem;

  svg {
    width: 2.5rem;
  }
`

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${theme.spacings.xxsmall};
`

export const Price = styled.div<PriceProps>`
  ${({ isPromotional }) => css`
    display: inline-flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    height: 3rem;

    ${!isPromotional && modifiers.default(theme)}
    ${isPromotional && modifiers.promotional(theme)}
  `};
`
