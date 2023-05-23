'use client';

import { createContext, useContext, useState, ReactNode, useMemo, Dispatch, SetStateAction } from 'react';

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
  const [theme, setTheme] = useState('light');

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <body data-theme={theme}>{children}</body>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
