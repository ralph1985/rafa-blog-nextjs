import { render, screen } from '@testing-library/react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from '../src/app/navbar';

jest.mock('next-translate/useTranslation', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const navItems = {
  en: {
    home: {
      name: 'Home',
      href: '/en',
    },
    about: {
      name: 'About me',
      href: '/en/about',
    },
  },
  es: {
    home: {
      name: 'Inicio',
      href: '/es',
    },
    about: {
      name: 'Acerca de mi',
      href: '/es/about',
    },
  },
};

Object.entries(navItems).forEach(([lang, { home, about }]) => {
  describe(`NavBar component for ${lang}`, () => {
    beforeEach(() => {
      const translations = require(`../locales/${lang}/navbar.json`);

      useTranslation.mockReturnValue({
        t: (key) => translations[key],
        lang,
      });
    });

    test('renders the navigation items correctly', () => {
      render(<NavBar />);

      const homeLink = screen.getByText(home.name);
      const aboutLink = screen.getByText(about.name);

      expect(homeLink.getAttribute('href')).toBe(home.href);
      expect(aboutLink.getAttribute('href')).toBe(about.href);
    });
  });
});
