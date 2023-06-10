'use client';

import { createContext, useContext, useEffect, useState, ReactNode, useMemo, Dispatch, SetStateAction } from 'react';
import { MENU_POSITION, THEMES } from '@constants/index';

type Theme = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  menuPosition: string;
  setMenuPosition: Dispatch<SetStateAction<string>>;
};

const ThemeContext = createContext<Theme>({
  theme: '',
  setTheme: () => {},
  menuPosition: '',
  setMenuPosition: () => {},
});

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(THEMES.light);
  const [menuPosition, setMenuPosition] = useState(MENU_POSITION.left);
  const contextValue = useMemo(() => ({ theme, setTheme, menuPosition, setMenuPosition }), [theme, setTheme, menuPosition, setMenuPosition]);

  const handleChangeTheme = (event: MediaQueryListEvent) => {
    setTheme(event?.matches ? THEMES.dark : THEMES.light);
  };

  useEffect(() => {
    const mediaQuery = window?.matchMedia?.('(prefers-color-scheme: dark)');

    setTheme(mediaQuery?.matches ? THEMES.dark : THEMES.light);

    mediaQuery?.addEventListener('change', handleChangeTheme);

    return () => {
      mediaQuery?.removeEventListener('change', handleChangeTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider value={contextValue}>
      <div id="body" data-theme={theme} data-menu-position={menuPosition}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
