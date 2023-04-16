import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Hamburger from './hamburger';

describe('Hamburger Component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<Hamburger className="test" onChange={() => {}} />);
    const hamburgerElement = getByTestId('hamburger');

    expect(hamburgerElement).toBeInTheDocument();
  });

  test('calls onChange when checkbox is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Hamburger className="test" onChange={onChangeMock} />);
    const checkboxElement = getByTestId('hamburger').querySelector('input[type="checkbox"]');

    fireEvent.click(checkboxElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  test('updates isChecked state when checkbox is clicked', () => {
    const { getByTestId } = render(<Hamburger className="test" onChange={() => {}} />);
    const checkboxElement = getByTestId('hamburger').querySelector('input[type="checkbox"]');

    fireEvent.click(checkboxElement);

    expect(checkboxElement).toBeChecked();
  });

  test('displays correct text based on isChecked state', () => {
    const { getByTestId } = render(<Hamburger className="test" onChange={() => {}} />);
    const textElement = getByTestId('hamburger').querySelector('span');

    expect(textElement).toHaveTextContent('menu-open');

    fireEvent.click(getByTestId('hamburger').querySelector('input[type="checkbox"]'));

    expect(textElement).toHaveTextContent('menu-close');
  });
});
