import {
  GetGames_games,
  GetHome_banners,
  GetHome_sections_freeGames_highlight,
} from 'graphql/types'

export const bannersMapper = (banners: GetHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size,
    }),
  }))
}

export const gamesMapper = (games: GetGames_games[] | null | undefined) => {
  return (
    games &&
    games.map((game) => ({
      title: game.name,
      slug: game.slug,
      developers: game.developers[0].name,
      img: `http://localhost:1337${game.cover?.url}`,
      price: game.price,
    }))
  )
}

export const highlightMapper = (
  highlight: GetHome_sections_freeGames_highlight | null | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight.subtitle,
      backgroundImage: `http://localhost:1337${highlight.background?.url}`,
      floatImage: `http://localhost:1337${highlight.floatImage?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: `/games/${highlight.buttonLink}`,
      alignment: highlight.alignment,
    }
  )
}
