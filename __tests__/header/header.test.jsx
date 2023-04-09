import { render, screen } from '@testing-library/react';
import Header from '../../src/app/header/header';

describe('Header', () => {
  it('renders a text', () => {
    render(<Header />);

    const text = screen.getByText('Header');

    // TODO: hacer los tests de la header

    expect(text).toBeInTheDocument();
  });
});