'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { FormControlLabel, MaterialUISwitch } from '../MaterialUI/MaterialUISwitch';
import { useThemeContext } from '../../context/ThemeContext'; // TODO: arreglar el tener que poner "../../" para que los tests de Jest pasen
import Hamburger from '../Buttons/Hamburger';
import { locales } from '../../../../i18n';
import styles from './index.module.scss';

type NavItem = {
  label: string;
  href: string;
};

export default function NavBar() {
  const { theme, setTheme } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const { t, lang } = useTranslation('navbar');
  let pathname = usePathname();

  if (pathname === '/') {
    pathname = '';
  }

  const baseLang = `/${lang}`;
  const pathnameWithoutLang = pathname?.replace(baseLang, '');
  const defaultItems: NavItem[] = [
    // TODO: refactor this
    {
      label: t('home'),
      href: baseLang,
    },
    {
      label: t('about'),
      href: `${baseLang}/about`,
    },
    {
      label: t('contact'),
      href: `${baseLang}/contact`,
    },
  ];

  const handleChangeTheme = (event: React.SyntheticEvent, checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <>
      <nav data-theme={theme} className={`${styles.navbar} ${isVisible ? styles.open : ''}`}>
        <div>
          {defaultItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={toggleVisibility}>
              {item.label}
            </Link>
          ))}
          {locales.map(
            (locale) =>
              lang !== locale && (
                <a key={locale} href={`/${locale}`.concat(pathnameWithoutLang)}>
                  <Image src={`/flags/${locale}.svg`} alt={t(`flag-${locale}`)} width={25} height={25} />
                </a>
              )
          )}
        </div>
        <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} checked={theme !== 'light'} />} label="" onChange={handleChangeTheme} />
      </nav>
      <Hamburger className={styles.hamburger} onChange={toggleVisibility} />
      {isVisible && (
        <button type="button" className={styles.secondaryCloseNavBarButton} onClick={toggleVisibility}>
          {t('menu-close')}
        </button>
      )}
    </>
  );
}
