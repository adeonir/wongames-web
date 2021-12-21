/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGames
// ====================================================

export interface GetGames_games_cover {
  url: string
}

export interface GetGames_games_developers {
  name: string
}

export interface GetGames_games {
  name: string
  slug: string
  cover: GetGames_games_cover | null
  developers: GetGames_games_developers[]
  price: number
}

export interface GetGames {
  games: GetGames_games[]
}

export interface GetGamesVariables {
  limit: number
  start?: number | null
}
