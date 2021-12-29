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
  id: string
  name: string
  slug: string
  cover: GetGames_games_cover | null
  developers: GetGames_games_developers[]
  price: number
}

export interface GetGames_gamesConnection_values {
  id: string
}

export interface GetGames_gamesConnection {
  values: (GetGames_gamesConnection_values | null)[] | null
}

export interface GetGames {
  games: GetGames_games[]
  gamesConnection: GetGames_gamesConnection | null
}

export interface GetGamesVariables {
  limit?: number | null
  start?: number | null
  where?: any | null
  sort?: string | null
}
