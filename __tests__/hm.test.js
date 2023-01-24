import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Footer />)

    const sut = screen.getByText("All rights reserved");

    expect(sut).toBeInTheDocument();
  })
})