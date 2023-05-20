import useTranslation from 'next-translate/useTranslation';
import CookieConsent from '../CookieConsent/CookieConsent';
import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.style}>
      <div data-testid="footer">
        &copy;
        {year} Rafael García Prieto. {t('allRightsReserved')}
      </div>
      <CookieConsent />
    </footer>
  );
}
