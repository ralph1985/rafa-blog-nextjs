'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './hamburger';
import { locales } from '../../../i18n';
import styles from './navbar.module.scss';

type NavItem = {
  label: string;
  href: string;
};

export default function NavBar() {
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
    {
      label: t('home'),
      href: baseLang,
    },
    {
      label: t('about'),
      href: `${baseLang}/about`,
    },
  ];

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
