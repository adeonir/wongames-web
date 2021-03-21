import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import { theme } from 'styles'

import { TextContent } from '.'

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`,
}

describe('<TextContent />', () => {
  it('should render the title and content', () => {
    renderWithTheme(<TextContent {...props} />)

    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without the title', () => {
    renderWithTheme(<TextContent content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render text in white when smaller then 768px', () => {
    renderWithTheme(<TextContent {...props} />)

    const container = screen.queryByRole('heading', { name: /description/i })
      ?.parentElement

    expect(container).toHaveStyle({
      color: theme.colors.white,
    })

    expect(container).toHaveStyleRule('color', theme.colors.black, {
      media: '(min-width: 768px)',
    })
  })

  it('should render background in blue when smaller then 768px', () => {
    renderWithTheme(<TextContent {...props} />)

    const container = screen.queryByRole('heading', { name: /description/i })
      ?.parentElement

    expect(container).toHaveStyleRule('background', theme.colors.white, {
      media: '(min-width: 768px)',
    })
  })
})
