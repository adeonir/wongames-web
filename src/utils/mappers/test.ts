import {
  QueryGames_games,
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight,
} from 'graphql/types'

import {
  bannersMapper,
  cartMapper,
  gamesMapper,
  highlightMapper,
  ordersMapper,
  singleGameMapper,
} from '.'

describe('bannersMapper', () => {
  it('should return the correct format when mapped', () => {
    const banner = {
      image: {
        url: '/image.png',
      },
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'Button label',
        link: '/button-link',
      },
      ribbon: {
        text: 'Ribbon text',
        color: 'primary',
        size: 'small',
      },
    } as QueryHome_banners

    expect(bannersMapper([banner])).toEqual([
      {
        img: 'http://localhost:1337/image.png',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'Button label',
        buttonLink: '/button-link',
        ribbon: 'Ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small',
      },
    ])
  })
})

describe('singleGameMapper and gamesMapper', () => {
  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'Game name',
      slug: 'game-slug',
      cover: {
        url: '/image.png',
      },
      developers: [
        {
          name: 'Developer name',
        },
      ],
      price: 0,
    } as QueryGames_games

    expect(singleGameMapper(game)).toEqual({
      id: '1',
      title: 'Game name',
      slug: 'game-slug',
      developer: 'Developer name',
      img: 'http://localhost:1337/image.png',
      price: 0,
    })
  })

  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'Game name',
      slug: 'game-slug',
      cover: {
        url: '/image.png',
      },
      developers: [
        {
          name: 'Developer name',
        },
      ],
      price: 0,
    } as QueryGames_games

    expect(gamesMapper([game])).toEqual([
      {
        id: '1',
        title: 'Game name',
        slug: 'game-slug',
        developer: 'Developer name',
        img: 'http://localhost:1337/image.png',
        price: 0,
      },
    ])
  })

  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })
})

describe('highlightMapper()', () => {
  it('should return empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should return mapped highlight', () => {
    const highlight = {
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      background: {
        url: '/image.jpg',
      },
      buttonLabel: 'Button label',
      buttonLink: '/button-link',
      alignment: 'right',
      floatImage: {
        url: '/image.jpg',
      },
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      backgroundImage: 'http://localhost:1337/image.jpg',
      buttonLabel: 'Button label',
      buttonLink: '/button-link',
      alignment: 'right',
      floatImage: 'http://localhost:1337/image.jpg',
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if there are no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapper cart items', () => {
    const game = {
      id: '1',
      name: 'Game name',
      cover: {
        url: '/image.png',
      },
      price: 10,
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/image.png',
        price: 10,
        title: 'Game name',
      },
    ])
  })
})

describe('ordersMapper()', () => {
  it('should return empty array if there are no games', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const orders = [
      {
        id: '1',
        card_brand: 'visa',
        card_last4: '4242',
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
            price: 10,
          },
        ],
        __typename: 'Order',
      },
    ]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'visa',
          img: '/img/cards/visa.png',
          number: '**** **** **** 4242',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$10.00',
          },
        ],
      },
    ])
  })

  it('should return free game when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        card_brand: null,
        card_last4: null,
        created_at: '2021-04-14T18:41:48.358Z',
        games: [
          {
            id: '1',
            name: 'game',
            developers: [
              {
                name: 'developer',
              },
            ],
            slug: 'game',
            cover: {
              url: '/image.jpg',
            },
            price: 0,
          },
        ],
      },
    ]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on Apr 14, 2021',
        },
        games: [
          {
            id: '1',
            title: 'game',
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: 'http://localhost:1337/image.jpg',
            price: '$0.00',
          },
        ],
      },
    ])
  })
})
