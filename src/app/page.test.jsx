import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders a text', () => {
    render(<Home />);

    const text = screen.getByText('home');

    // TODO: hacer los tests de la Home

    expect(text).toBeInTheDocument();
  });
});
