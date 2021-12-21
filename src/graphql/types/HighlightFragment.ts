/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from './globalTypes'

// ====================================================
// GraphQL fragment: HighlightFragment
// ====================================================

export interface HighlightFragment_background {
  url: string
}

export interface HighlightFragment_floatImage {
  url: string
}

export interface HighlightFragment {
  title: string
  subtitle: string
  background: HighlightFragment_background | null
  floatImage: HighlightFragment_floatImage | null
  buttonLabel: string
  buttonLink: string
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null
}
