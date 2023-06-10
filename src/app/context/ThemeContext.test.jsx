import { render, renderHook, act } from '@testing-library/react';
import { THEMES } from '@constants/index';
import { ThemeContextProvider, useThemeContext } from './ThemeContext';

describe('ThemeContextProvider', () => {
  test('should provide default theme and setTheme function', () => {
    function TestComponent() {
      const { theme, setTheme } = useThemeContext();

      return (
        <div>
          <span>{theme}</span>
          <button type="button" onClick={() => setTheme(THEMES.dark)}>
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

    expect(getByText(THEMES.light)).toBeInTheDocument();
    expect(typeof getByText('Change Theme')).toBe('object');
  });

  test('should update the theme', () => {
    function TestComponent() {
      const { theme, setTheme } = useThemeContext();

      return (
        <div>
          <span>{theme}</span>
          <button type="button" onClick={() => setTheme(THEMES.dark)}>
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

    expect(getByText(THEMES.dark)).toBeInTheDocument();
  });

  test('should change theme when prefers-color-scheme is dark', () => {
    const matchMediaMock = jest.fn().mockReturnValue({ addEventListener: () => {}, removeEventListener: () => {}, matches: true });

    window.matchMedia = matchMediaMock;

    const { result } = renderHook(() => useThemeContext(), {
      wrapper: ThemeContextProvider,
    });

    expect(result.current.theme).toBe(THEMES.dark);
  });

  test('should change theme when media query changes', () => {
    const { result } = renderHook(() => useThemeContext(), {
      wrapper: ThemeContextProvider,
    });

    // expect(result.current.theme).toBe('light'); // TODO: corregir que se pruebe al cambiar la mediaQuery

    // Simulate media query change to dark mode
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
    window.dispatchEvent(new Event('change'));

    expect(result.current.theme).toBe('dark');
  });

  // TODO: faltan los tests para el switch del cambio de posición del menú
});
