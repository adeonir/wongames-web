/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  ENUM_COMPONENTPAGERIBBON_COLOR,
  ENUM_COMPONENTPAGERIBBON_SIZE,
  ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT,
} from './globalTypes'

// ====================================================
// GraphQL query operation: GetHome
// ====================================================

export interface GetHome_banners_image {
  url: string
}

export interface GetHome_banners_button {
  label: string
  link: string
}

export interface GetHome_banners_ribbon {
  text: string | null
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null
}

export interface GetHome_banners {
  image: GetHome_banners_image | null
  title: string
  subtitle: string
  button: GetHome_banners_button | null
  ribbon: GetHome_banners_ribbon | null
}

export interface GetHome_newGames_cover {
  url: string
}

export interface GetHome_newGames_developers {
  name: string
}

export interface GetHome_newGames {
  name: string
  slug: string
  cover: GetHome_newGames_cover | null
  developers: GetHome_newGames_developers[]
  price: number
}

export interface GetHome_upcomingGames_cover {
  url: string
}

export interface GetHome_upcomingGames_developers {
  name: string
}

export interface GetHome_upcomingGames {
  name: string
  slug: string
  cover: GetHome_upcomingGames_cover | null
  developers: GetHome_upcomingGames_developers[]
  price: number
}

export interface GetHome_freeGames_cover {
  url: string
}

export interface GetHome_freeGames_developers {
  name: string
}

export interface GetHome_freeGames {
  name: string
  slug: string
  cover: GetHome_freeGames_cover | null
  developers: GetHome_freeGames_developers[]
  price: number
}

export interface GetHome_sections_newGames_highlight_background {
  url: string
}

export interface GetHome_sections_newGames_highlight_floatImage {
  url: string
}

export interface GetHome_sections_newGames_highlight {
  title: string
  subtitle: string
  background: GetHome_sections_newGames_highlight_background | null
  floatImage: GetHome_sections_newGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetHome_sections_newGames {
  title: string | null
  highlight: GetHome_sections_newGames_highlight | null
}

export interface GetHome_sections_popularGames_highlight_background {
  url: string
}

export interface GetHome_sections_popularGames_highlight_floatImage {
  url: string
}

export interface GetHome_sections_popularGames_highlight {
  title: string
  subtitle: string
  background: GetHome_sections_popularGames_highlight_background | null
  floatImage: GetHome_sections_popularGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetHome_sections_popularGames_games_cover {
  url: string
}

export interface GetHome_sections_popularGames_games_developers {
  name: string
}

export interface GetHome_sections_popularGames_games {
  name: string
  slug: string
  cover: GetHome_sections_popularGames_games_cover | null
  developers: GetHome_sections_popularGames_games_developers[]
  price: number
}

export interface GetHome_sections_popularGames {
  title: string
  highlight: GetHome_sections_popularGames_highlight | null
  games: GetHome_sections_popularGames_games[]
}

export interface GetHome_sections_upcomingGames_highlight_background {
  url: string
}

export interface GetHome_sections_upcomingGames_highlight_floatImage {
  url: string
}

export interface GetHome_sections_upcomingGames_highlight {
  title: string
  subtitle: string
  background: GetHome_sections_upcomingGames_highlight_background | null
  floatImage: GetHome_sections_upcomingGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetHome_sections_upcomingGames {
  title: string | null
  highlight: GetHome_sections_upcomingGames_highlight | null
}

export interface GetHome_sections_freeGames_highlight_background {
  url: string
}

export interface GetHome_sections_freeGames_highlight_floatImage {
  url: string
}

export interface GetHome_sections_freeGames_highlight {
  title: string
  subtitle: string
  background: GetHome_sections_freeGames_highlight_background | null
  floatImage: GetHome_sections_freeGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetHome_sections_freeGames {
  title: string | null
  highlight: GetHome_sections_freeGames_highlight | null
}

export interface GetHome_sections {
  newGames: GetHome_sections_newGames | null
  popularGames: GetHome_sections_popularGames | null
  upcomingGames: GetHome_sections_upcomingGames | null
  freeGames: GetHome_sections_freeGames | null
}

export interface GetHome {
  banners: GetHome_banners[]
  newGames: GetHome_newGames[]
  upcomingGames: GetHome_upcomingGames[]
  freeGames: GetHome_freeGames[]
  sections: GetHome_sections | null
}

export interface GetHomeVariables {
  date: any
}
