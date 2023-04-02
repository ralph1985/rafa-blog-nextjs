import { render, screen } from '@testing-library/react'
import Home from '../src/app/page.tsx'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />)

    const text = screen.getByText('Get started by editing')

    expect(text).toBeInTheDocument()
  })
})
