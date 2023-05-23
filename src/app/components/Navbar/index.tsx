'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { FormControlLabel, MaterialUISwitch } from '@components/MaterialUI/MaterialUISwitch';
import { useThemeContext } from '@context/ThemeContext';
import Hamburger from '@components/Buttons/Hamburger';
import { NAV_ITEMS } from '@constants/index';
import { locales } from '@i18n';
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
  const defaultItems: NavItem[] = NAV_ITEMS.map((item: { href: string; key: string }) => ({
    label: t(item.key),
    href: item.href.replace('__BASE_LANG__', baseLang),
  }));

  const handleChangeTheme = (event: React.SyntheticEvent, checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isVisible ? styles.open : ''}`}>
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
        <FormControlLabel
          data-testid="switchTheme"
          control={<MaterialUISwitch sx={{ m: 1 }} checked={theme === 'dark'} />}
          label=""
          onChange={handleChangeTheme}
        />
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
