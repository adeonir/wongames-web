import {
  GetGames_games,
  GetHome_banners,
  GetHome_sections_freeGames_highlight,
} from 'graphql/types'

import {
  bannersMapper,
  gamesMapper,
  highlightMapper,
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
    } as GetHome_banners

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
    } as GetGames_games

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
    } as GetGames_games

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
    } as GetHome_sections_freeGames_highlight

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
