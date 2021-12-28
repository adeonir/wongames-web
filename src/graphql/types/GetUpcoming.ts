/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: GetUpcoming
// ====================================================

export interface GetUpcoming_upcomingGames_cover {
  url: string
}

export interface GetUpcoming_upcomingGames_developers {
  name: string
}

export interface GetUpcoming_upcomingGames {
  id: string
  name: string
  slug: string
  cover: GetUpcoming_upcomingGames_cover | null
  developers: GetUpcoming_upcomingGames_developers[]
  price: number
}

export interface GetUpcoming_showCase_upcomingGames_highlight_background {
  url: string
}

export interface GetUpcoming_showCase_upcomingGames_highlight_floatImage {
  url: string
}

export interface GetUpcoming_showCase_upcomingGames_highlight {
  title: string
  subtitle: string
  background: GetUpcoming_showCase_upcomingGames_highlight_background | null
  floatImage: GetUpcoming_showCase_upcomingGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetUpcoming_showCase_upcomingGames {
  title: string | null
  highlight: GetUpcoming_showCase_upcomingGames_highlight | null
}

export interface GetUpcoming_showCase {
  upcomingGames: GetUpcoming_showCase_upcomingGames | null
}

export interface GetUpcoming {
  upcomingGames: GetUpcoming_upcomingGames[]
  showCase: GetUpcoming_showCase | null
}

export interface GetUpcomingVariables {
  date: any
}
