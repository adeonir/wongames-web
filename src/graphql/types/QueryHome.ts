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
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  url: string
}

export interface QueryHome_banners_button {
  label: string
  link: string
}

export interface QueryHome_banners_ribbon {
  text: string | null
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null
}

export interface QueryHome_banners {
  image: QueryHome_banners_image | null
  title: string
  subtitle: string
  button: QueryHome_banners_button | null
  ribbon: QueryHome_banners_ribbon | null
}

export interface QueryHome_newGames_cover {
  url: string
}

export interface QueryHome_newGames_developers {
  name: string
}

export interface QueryHome_newGames {
  id: string
  name: string
  slug: string
  cover: QueryHome_newGames_cover | null
  developers: QueryHome_newGames_developers[]
  price: number
}

export interface QueryHome_upcomingGames_cover {
  url: string
}

export interface QueryHome_upcomingGames_developers {
  name: string
}

export interface QueryHome_upcomingGames {
  id: string
  name: string
  slug: string
  cover: QueryHome_upcomingGames_cover | null
  developers: QueryHome_upcomingGames_developers[]
  price: number
}

export interface QueryHome_freeGames_cover {
  url: string
}

export interface QueryHome_freeGames_developers {
  name: string
}

export interface QueryHome_freeGames {
  id: string
  name: string
  slug: string
  cover: QueryHome_freeGames_cover | null
  developers: QueryHome_freeGames_developers[]
  price: number
}

export interface QueryHome_sections_newGames_highlight_background {
  url: string
}

export interface QueryHome_sections_newGames_highlight_floatImage {
  url: string
}

export interface QueryHome_sections_newGames_highlight {
  title: string
  subtitle: string
  background: QueryHome_sections_newGames_highlight_background | null
  floatImage: QueryHome_sections_newGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryHome_sections_newGames {
  title: string | null
  highlight: QueryHome_sections_newGames_highlight | null
}

export interface QueryHome_sections_popularGames_highlight_background {
  url: string
}

export interface QueryHome_sections_popularGames_highlight_floatImage {
  url: string
}

export interface QueryHome_sections_popularGames_highlight {
  title: string
  subtitle: string
  background: QueryHome_sections_popularGames_highlight_background | null
  floatImage: QueryHome_sections_popularGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryHome_sections_popularGames_games_cover {
  url: string
}

export interface QueryHome_sections_popularGames_games_developers {
  name: string
}

export interface QueryHome_sections_popularGames_games {
  id: string
  name: string
  slug: string
  cover: QueryHome_sections_popularGames_games_cover | null
  developers: QueryHome_sections_popularGames_games_developers[]
  price: number
}

export interface QueryHome_sections_popularGames {
  title: string
  highlight: QueryHome_sections_popularGames_highlight | null
  games: QueryHome_sections_popularGames_games[]
}

export interface QueryHome_sections_upcomingGames_highlight_background {
  url: string
}

export interface QueryHome_sections_upcomingGames_highlight_floatImage {
  url: string
}

export interface QueryHome_sections_upcomingGames_highlight {
  title: string
  subtitle: string
  background: QueryHome_sections_upcomingGames_highlight_background | null
  floatImage: QueryHome_sections_upcomingGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryHome_sections_upcomingGames {
  title: string | null
  highlight: QueryHome_sections_upcomingGames_highlight | null
}

export interface QueryHome_sections_freeGames_highlight_background {
  url: string
}

export interface QueryHome_sections_freeGames_highlight_floatImage {
  url: string
}

export interface QueryHome_sections_freeGames_highlight {
  title: string
  subtitle: string
  background: QueryHome_sections_freeGames_highlight_background | null
  floatImage: QueryHome_sections_freeGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryHome_sections_freeGames {
  title: string | null
  highlight: QueryHome_sections_freeGames_highlight | null
}

export interface QueryHome_sections {
  newGames: QueryHome_sections_newGames | null
  popularGames: QueryHome_sections_popularGames | null
  upcomingGames: QueryHome_sections_upcomingGames | null
  freeGames: QueryHome_sections_freeGames | null
}

export interface QueryHome {
  banners: QueryHome_banners[]
  newGames: QueryHome_newGames[]
  upcomingGames: QueryHome_upcomingGames[]
  freeGames: QueryHome_freeGames[]
  sections: QueryHome_sections | null
}

export interface QueryHomeVariables {
  date: any
}
