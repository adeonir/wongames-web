import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState = {}) {
  // check if the instance already exists, to not create a new instance
  const globalApolloClient = apolloClient ?? createApolloClient()

  // recover the data from the cache
  if (initialState) {
    globalApolloClient.cache.restore(initialState)
  }

  // always initialize with clean cache on SSR
  if (typeof window === 'undefined') {
    return globalApolloClient
  }

  apolloClient = apolloClient ?? globalApolloClient

  return apolloClient
}

export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
