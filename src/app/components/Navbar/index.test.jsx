import { render, screen, fireEvent, within } from '@testing-library/react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from './index';

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
      const translations = require(`../../../../locales/${lang}/navbar.json`);

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

    test('should toggle visibility of menu items when toggle button is clicked', () => {
      render(<NavBar />);

      fireEvent.click(screen.getByTestId('hamburger'));

      expect(screen.getByRole('navigation')).toHaveClass('open');

      fireEvent.click(screen.getByTestId('hamburger'));

      expect(screen.getByRole('navigation')).not.toHaveClass('open');
    });

    test('should changes theme when theme switch is toggled', () => {
      render(<NavBar />);

      const labelElement = screen.getByTestId('switchTheme');
      const themeSwitch = within(labelElement).getByRole('checkbox');

      expect(themeSwitch).not.toBeChecked();

      fireEvent.change(themeSwitch, { target: { checked: true } });

      expect(themeSwitch).toBeChecked();
    });
  });
});

// TODO: hacer los tests unitarios del cambio de idioma
