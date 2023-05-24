'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo, Dispatch, SetStateAction } from 'react';
import { THEMES } from '@constants/index';

type Theme = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<Theme>({
  theme: '',
  setTheme: () => {},
});

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(THEMES.light);
  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  const handleChange = (event: MediaQueryListEvent) => {
    setTheme(event?.matches ? THEMES.dark : THEMES.light);
  };

  useEffect(() => {
    const mediaQuery = window?.matchMedia?.('(prefers-color-scheme: dark)');

    setTheme(mediaQuery?.matches ? THEMES.dark : THEMES.light);

    mediaQuery?.addEventListener('change', handleChange);

    return () => {
      mediaQuery?.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id="body" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
