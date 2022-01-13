/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcomingGames_cover {
  url: string
}

export interface QueryUpcoming_upcomingGames_developers {
  name: string
}

export interface QueryUpcoming_upcomingGames {
  id: string
  name: string
  slug: string
  cover: QueryUpcoming_upcomingGames_cover | null
  developers: QueryUpcoming_upcomingGames_developers[]
  price: number
}

export interface QueryUpcoming_showCase_upcomingGames_highlight_background {
  url: string
}

export interface QueryUpcoming_showCase_upcomingGames_highlight_floatImage {
  url: string
}

export interface QueryUpcoming_showCase_upcomingGames_highlight {
  title: string
  subtitle: string
  background: QueryUpcoming_showCase_upcomingGames_highlight_background | null
  floatImage: QueryUpcoming_showCase_upcomingGames_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryUpcoming_showCase_upcomingGames {
  title: string | null
  highlight: QueryUpcoming_showCase_upcomingGames_highlight | null
}

export interface QueryUpcoming_showCase {
  upcomingGames: QueryUpcoming_showCase_upcomingGames | null
}

export interface QueryUpcoming {
  upcomingGames: QueryUpcoming_upcomingGames[]
  showCase: QueryUpcoming_showCase | null
}

export interface QueryUpcomingVariables {
  date: any
}
