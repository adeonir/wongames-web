import { GET_GAMES } from 'graphql/queries'

export const gamesMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, where: {} },
  },
  result: {
    data: {
      games: [
        {
          name: 'Mad Max',
          slug: 'mad-max',
          price: 518.39,
          developers: [{ name: 'Avalanche Studios' }],
          cover: {
            url: 'mad-max.jpg',
          },
          __typename: 'Game',
        },
      ],
    },
  },
}

export const fetchMoreMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, where: {}, start: 1 },
  },
  result: {
    data: {
      games: [
        {
          name: 'Cyberpunk 2077',
          slug: 'cyberpunk-2077',
          price: 518.39,
          developers: [{ name: 'CD Projekt Red' }],
          cover: {
            url: 'cyber.jpg',
          },
          __typename: 'Game',
        },
      ],
    },
  },
}
