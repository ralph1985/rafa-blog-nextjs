import { render, screen } from '@testing-library/react';
import Footer from '../../src/app/footer/footer';

describe('Footer', () => {
  it('should render footer with current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear().toString();
    const footer = screen.getByTestId('footer');

    expect(footer.innerHTML).toBe(`©${year} Rafael García Prieto. allRightsReserved`);
  });

  it('should render cookie consent', () => {
    const { getByRole } = render(<Footer />);

    expect(getByRole('button', { name: 'accept' })).toBeInTheDocument();
  });
});
