/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_orders_games_cover {
  url: string
}

export interface QueryOrders_orders_games_developers {
  name: string
}

export interface QueryOrders_orders_games {
  id: string
  name: string
  slug: string
  cover: QueryOrders_orders_games_cover | null
  developers: QueryOrders_orders_games_developers[]
  price: number
}

export interface QueryOrders_orders {
  id: string
  created_at: any
  card_brand: string | null
  card_last4: string | null
  games: QueryOrders_orders_games[]
}

export interface QueryOrders {
  orders: QueryOrders_orders[]
}

export interface QueryOrdersVariables {
  identifier: string
}
