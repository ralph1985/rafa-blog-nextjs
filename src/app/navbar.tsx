import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
};

function NavBar() {
  const { t, lang } = useTranslation('navbar');

  const defaultItems: NavItem[] = [
    {
      label: t('home'),
      href: `/${lang}`,
    },
    {
      label: t('about'),
      href: `/${lang}/about`,
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
      </ul>
    </nav>
  );
}

export default NavBar;
