'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { FormControlLabel, MaterialUISwitch } from '@components/MaterialUI/MaterialUISwitch';
import { useThemeContext } from '@context/ThemeContext';
import Hamburger from '@components/Buttons/Hamburger';
import { MENU_POSITION, NAV_ITEMS, THEMES } from '@constants/index';
import { locales } from '@i18n';
import styles from './index.module.scss';

type NavbarProps = {
  onClose: Function;
  onOpen: Function;
};

type NavItem = {
  label: string;
  href: string;
};

export default function NavBar(props: NavbarProps) {
  const { onClose, onOpen } = props;
  const { theme, setTheme, menuPosition, setMenuPosition } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = (timeout = 10) => {
    setTimeout(() => {
      setIsVisible(!isVisible);

      if (isVisible) {
        onClose();
      } else {
        onOpen();
      }
    }, timeout);
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
    setTheme(checked ? THEMES.dark : THEMES.light);
  };
  const handleChangeMenuPosition = (event: React.SyntheticEvent, checked: boolean) => {
    setMenuPosition(checked ? MENU_POSITION.right : MENU_POSITION.left);
  };

  function closeNavigationBarIfApplicable() {
    const hamburger = document.querySelector(`.${styles.hamburger}`) as HTMLElement;
    const { display } = window.getComputedStyle(hamburger);

    if (display !== 'none') {
      toggleVisibility(600);
    }
  }

  return (
    <>
      <nav id="navbar" className={`${styles.navbar} ${isVisible ? styles.open : ''}`}>
        <div>
          {defaultItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => closeNavigationBarIfApplicable()}>
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
        {/* TODO: falta establecer los "label" de los switch */}
        <FormControlLabel
          data-testid="switchTheme"
          control={<MaterialUISwitch sx={{ m: 1 }} icontype="theme" checked={theme === THEMES.dark} />}
          label=""
          onChange={handleChangeTheme}
        />
        <FormControlLabel
          data-testid="switchPositionMenu"
          control={<MaterialUISwitch sx={{ m: 1 }} icontype="position" checked={menuPosition === MENU_POSITION.right} />}
          label=""
          onChange={handleChangeMenuPosition}
        />
      </nav>
      <Hamburger className={styles.hamburger} checked={isVisible} onChange={() => toggleVisibility()} />
      {isVisible && (
        <button type="button" className={styles.secondaryCloseNavBarButton} onClick={() => toggleVisibility()}>
          {t('menu-close')}
        </button>
      )}
    </>
  );
}
