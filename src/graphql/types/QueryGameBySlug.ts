/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from './globalTypes'

// ====================================================
// GraphQL query operation: QueryGameBySlug
// ====================================================

export interface QueryGameBySlug_games_gallery {
  url: string
  alternativeText: string | null
}

export interface QueryGameBySlug_games_cover {
  url: string
}

export interface QueryGameBySlug_games_developers {
  name: string
}

export interface QueryGameBySlug_games_publisher {
  name: string
}

export interface QueryGameBySlug_games_categories {
  name: string
}

export interface QueryGameBySlug_games_platforms {
  name: string
}

export interface QueryGameBySlug_games {
  id: string
  name: string
  short_description: string
  description: string
  price: number
  rating: ENUM_GAME_RATING | null
  release_date: any | null
  gallery: QueryGameBySlug_games_gallery[]
  cover: QueryGameBySlug_games_cover | null
  developers: QueryGameBySlug_games_developers[]
  publisher: QueryGameBySlug_games_publisher | null
  categories: QueryGameBySlug_games_categories[]
  platforms: QueryGameBySlug_games_platforms[]
}

export interface QueryGameBySlug {
  games: QueryGameBySlug_games[]
}

export interface QueryGameBySlugVariables {
  slug: string
}
