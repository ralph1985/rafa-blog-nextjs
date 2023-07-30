import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './index';

describe('Card component', () => {
  const mockProps = {
    imageSrc: 'https://example.com/image.jpg',
    title: 'Test Title',
    subtitle: 'Test Subtitle',
  };

  it('renders the Card component with the provided props', () => {
    render(<Card imageSrc={mockProps.imageSrc} title={mockProps.title} subtitle={mockProps.subtitle} />);

    const imageElement = screen.getByRole('img');

    expect(imageElement).toHaveAttribute('src', mockProps.imageSrc);
    expect(imageElement).toHaveAttribute('alt', ''); // TODO: habrá que poner un alt algún día...

    const titleElement = screen.getByText(mockProps.title);

    expect(titleElement).toBeInTheDocument();

    const subtitleElement = screen.getByText(mockProps.subtitle);

    expect(subtitleElement).toBeInTheDocument();
  });
});
