import 'session-mock'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'

import { render, screen, waitFor } from 'utils/tests'
import apolloCache from 'utils/apollo/cache'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock, noGamesMock } from 'templates/Games/mock'

import Games from '.'

jest.mock('next/router')

const push = jest.fn()
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  },
}))

describe('<Games />', () => {
  it('should render sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByText(/price/i)).toBeInTheDocument()
      expect(screen.getByText(/mad max/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /show more/i })
      ).toBeInTheDocument()
    })
  })

  it('should render emtpy when no games were found', async () => {
    render(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/we didn't find any games with these filters/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/mad max/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/cyberpunk 2077/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByRole('radio', { name: /low to high/i }))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' },
    })
  })
})
