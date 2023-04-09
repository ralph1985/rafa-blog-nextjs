'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
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
    <nav className={`${styles.style} ${isVisible ? styles.open : ''}`}>
      <button type="button" className={styles.button} onClick={toggleVisibility}>
        Toggle Menu
      </button>
      <ul>
        {defaultItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>
          {locales.map(
            (locale) =>
              lang !== locale && (
                <a key={locale} href={`/${locale}`.concat(pathnameWithoutLang)}>
                  <Image src={`flags/${locale}.svg`} alt={t(`flag-${locale}`)} width={25} height={25} />
                </a>
              )
          )}
        </li>
      </ul>
    </nav>
  );
}
