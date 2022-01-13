/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_highlight_background {
  url: string
}

export interface QueryRecommended_recommended_section_highlight_floatImage {
  url: string
}

export interface QueryRecommended_recommended_section_highlight {
  title: string
  subtitle: string
  background: QueryRecommended_recommended_section_highlight_background | null
  floatImage: QueryRecommended_recommended_section_highlight_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}

export interface QueryRecommended_recommended_section_games_cover {
  url: string
}

export interface QueryRecommended_recommended_section_games_developers {
  name: string
}

export interface QueryRecommended_recommended_section_games {
  id: string
  name: string
  slug: string
  cover: QueryRecommended_recommended_section_games_cover | null
  developers: QueryRecommended_recommended_section_games_developers[]
  price: number
}

export interface QueryRecommended_recommended_section {
  title: string
  highlight: QueryRecommended_recommended_section_highlight | null
  games: QueryRecommended_recommended_section_games[]
}

export interface QueryRecommended_recommended {
  section: QueryRecommended_recommended_section | null
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null
}
