/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: GetRecommended
// ====================================================

export interface GetRecommended_recommended_section_highlight_background {
  url: string
}

export interface GetRecommended_recommended_section_highlight_floatImage {
  url: string
}

export interface GetRecommended_recommended_section_highlight {
  title: string
  subtitle: string
  background: GetRecommended_recommended_section_highlight_background | null
  floatImage: GetRecommended_recommended_section_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface GetRecommended_recommended_section_games_cover {
  url: string
}

export interface GetRecommended_recommended_section_games_developers {
  name: string
}

export interface GetRecommended_recommended_section_games {
  id: string
  name: string
  slug: string
  cover: GetRecommended_recommended_section_games_cover | null
  developers: GetRecommended_recommended_section_games_developers[]
  price: number
}

export interface GetRecommended_recommended_section {
  title: string
  highlight: GetRecommended_recommended_section_highlight | null
  games: GetRecommended_recommended_section_games[]
}

export interface GetRecommended_recommended {
  section: GetRecommended_recommended_section | null
}

export interface GetRecommended {
  recommended: GetRecommended_recommended | null
}
