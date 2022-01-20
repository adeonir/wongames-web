/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from './globalTypes'

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_wishlist_games_cover {
  url: string
}

export interface MutationCreateWishlist_createWishlist_wishlist_games_developers {
  name: string
}

export interface MutationCreateWishlist_createWishlist_wishlist_games {
  id: string
  name: string
  slug: string
  cover: MutationCreateWishlist_createWishlist_wishlist_games_cover | null
  developers: MutationCreateWishlist_createWishlist_wishlist_games_developers[]
  price: number
}

export interface MutationCreateWishlist_createWishlist_wishlist {
  id: string
  games: MutationCreateWishlist_createWishlist_wishlist_games[]
}

export interface MutationCreateWishlist_createWishlist {
  wishlist: MutationCreateWishlist_createWishlist_wishlist | null
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null
}

export interface MutationCreateWishlistVariables {
  input: createWishlistInput
}
