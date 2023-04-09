import useTranslation from 'next-translate/useTranslation';
import CookieConsent from './cookie-consent/cookie-consent';
import styles from './footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div data-testid="footer">
        &copy;
        {year} Rafael García Prieto. {t('allRightsReserved')}
      </div>
      <CookieConsent />
    </footer>
  );
}
