import { Game, GameTemplateProps } from 'templates/Game'

import { Container } from 'components/Container'

export default function Index(props: GameTemplateProps) {
  return (
    <Game {...props}>
      <Container>
        <h1 style={{ color: '#fff' }}>Game page</h1>
      </Container>
    </Game>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { slug: 'cyberpunk-2077' },
      },
    ],
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
    },
  }
}
