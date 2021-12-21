/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameFragment
// ====================================================

export interface GameFragment_cover {
  url: string
}

export interface GameFragment_developers {
  name: string
}

export interface GameFragment {
  name: string
  slug: string
  cover: GameFragment_cover | null
  developers: GameFragment_developers[]
  price: number
}
