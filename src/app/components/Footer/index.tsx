import useTranslation from 'next-translate/useTranslation';
import CookieConsent from '../CookieConsent';
import styles from './index.module.scss';

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
