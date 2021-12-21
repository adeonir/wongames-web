/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_GAME_RATING } from './globalTypes'

// ====================================================
// GraphQL query operation: GetGameBySlug
// ====================================================

export interface GetGameBySlug_games_gallery {
  url: string
  alternativeText: string | null
}

export interface GetGameBySlug_games_cover {
  url: string
}

export interface GetGameBySlug_games_developers {
  name: string
}

export interface GetGameBySlug_games_publisher {
  name: string
}

export interface GetGameBySlug_games_categories {
  name: string
}

export interface GetGameBySlug_games_platforms {
  name: string
}

export interface GetGameBySlug_games {
  name: string
  short_description: string
  description: string
  price: number
  rating: ENUM_GAME_RATING | null
  release_date: any | null
  gallery: GetGameBySlug_games_gallery[]
  cover: GetGameBySlug_games_cover | null
  developers: GetGameBySlug_games_developers[]
  publisher: GetGameBySlug_games_publisher | null
  categories: GetGameBySlug_games_categories[]
  platforms: GetGameBySlug_games_platforms[]
}

export interface GetGameBySlug {
  games: GetGameBySlug_games[]
}

export interface GetGameBySlugVariables {
  slug: string
}
