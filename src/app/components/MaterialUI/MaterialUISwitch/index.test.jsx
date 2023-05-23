import { render, fireEvent } from '@testing-library/react';
import { FormControlLabel, MaterialUISwitch } from './index';

describe('MaterialUISwitch', () => {
  test('should render correctly', () => {
    const { container } = render(<FormControlLabel control={<MaterialUISwitch />} label="Toggle" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should toggle switch when clicked', () => {
    const { container } = render(<FormControlLabel control={<MaterialUISwitch />} label="Toggle" />);

    const switchInput = container.querySelector('input[type="checkbox"]');

    expect(switchInput.checked).toBe(false);

    fireEvent.click(switchInput);
    expect(switchInput.checked).toBe(true);

    fireEvent.click(switchInput);
    expect(switchInput.checked).toBe(false);
  });
});
