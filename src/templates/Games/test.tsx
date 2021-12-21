import { screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import apolloCache from 'services'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from 'templates/Games/mock'

import Games from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  },
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  },
}))

describe('<Games />', () => {
  it('should render loading when template starts', () => {
    renderWithTheme(
      <MockedProvider mocks={[]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
      expect(screen.getByText('Mad Max')).toBeInTheDocument()

      expect(
        screen.getByRole('button', { name: /show more/i })
      ).toBeInTheDocument()
    })
  })

  it('should render more games when `show more` is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Mad Max')).toBeInTheDocument()
    })

    userEvent.click(screen.getByRole('button', { name: /show more/i }))

    await waitFor(() => {
      expect(screen.getByText('Cyberpunk 2077')).toBeInTheDocument()
    })
  })
})
