import useTranslation from 'next-translate/useTranslation';
import CookieConsent from './cookieConsent';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer>
      <div data-testid="footer">
        &copy;
        {year} Rafael García Prieto. {t('allRightsReserved')}
      </div>
      <CookieConsent />
    </footer>
  );
}
