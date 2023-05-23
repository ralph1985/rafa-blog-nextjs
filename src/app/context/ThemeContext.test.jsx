import { render, act } from '@testing-library/react';
import { ThemeContextProvider, useThemeContext } from './ThemeContext';

describe('ThemeContextProvider', () => {
  test('should provide default theme and setTheme function', () => {
    function TestComponent() {
      const { theme, setTheme } = useThemeContext();

      return (
        <div>
          <span>{theme}</span>
          <button type="button" onClick={() => setTheme('dark')}>
            Change Theme
          </button>
        </div>
      );
    }

    const { getByText } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    expect(getByText('light')).toBeInTheDocument();
    expect(typeof getByText('Change Theme')).toBe('object');
  });

  test('should update the theme', () => {
    function TestComponent() {
      const { theme, setTheme } = useThemeContext();

      return (
        <div>
          <span>{theme}</span>
          <button type="button" onClick={() => setTheme('dark')}>
            Change Theme
          </button>
        </div>
      );
    }

    const { getByText } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    act(() => {
      getByText('Change Theme').click();
    });

    expect(getByText('dark')).toBeInTheDocument();
  });
});
