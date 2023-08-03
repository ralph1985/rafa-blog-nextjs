import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './index';

describe('ErrorMessage component', () => {
  it('renders the title and message correctly', () => {
    const title = 'Error Title';
    const message = 'Error Message';

    const { getByText } = render(<ErrorMessage title={title} message={message} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });
});
