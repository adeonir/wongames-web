import { Container, Footer, Heading, Menu } from 'components'

import { HomeContainer } from './styles'

export const Home = () => (
  <HomeContainer>
    <Container>
      <header>
        <Menu />
      </header>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>
    </Container>

    <Container>
      <Footer />
    </Container>
  </HomeContainer>
)
