import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should validate text Abner fonseca', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Abner fonseca/i })
    ).toBeInTheDocument()
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
