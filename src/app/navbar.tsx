'use client';

import { usePathname } from 'next/navigation';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { locales } from '../../i18n';

// TODO: sacar esta función a "utils"
function joinArray<T, S>(array: Array<T>, separator: S): Array<T | S> {
  return array.reduce<(T | S)[]>((p, c, idx) => {
    if (idx === 0) {
      return [c];
    }

    return [...p, separator, c];
  }, []);
}

type NavItem = {
  label: string;
  href: string;
};

export default function NavBar() {
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
    <nav>
      <ul>
        {defaultItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>
          {joinArray(
            locales.map((locale) => (
              <a key={locale} href={`/${locale}`.concat(pathnameWithoutLang)}>
                {locale.toLocaleUpperCase()}
              </a>
            )),
            '/'
          )}
        </li>
      </ul>
    </nav>
  );
}
