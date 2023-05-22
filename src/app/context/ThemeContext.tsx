'use client';

import { createContext, useContext, useState, ReactNode, useMemo } from 'react';

const ThemeContext = createContext({});

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState('light');

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export const useThemeContext = () => useContext(ThemeContext);

// TODO: faltan los tests unitarios
