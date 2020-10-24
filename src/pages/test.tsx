import { screen, render } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render correctly', () => {
    const { container } = render(<Home title="huehuehu" />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render correctly', () => {
    render(<Home title="huehuehu" />)

    expect(
      screen.getByRole('heading', { name: /huehuehu/i })
    ).toBeInTheDocument()
  })
})
