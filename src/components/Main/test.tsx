import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should validate text Abner fonseca', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Abner fonseca/i })
    ).toBeInTheDocument()
  })

  it('should validate Subtitle text ', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /Poc de Typescript, styled-components, Reactjs, NextJs/i
      })
    ).toBeInTheDocument()
  })
  it('should  render the color correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })

  it('should render correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
