'use client';

import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from './cookie-consent.module.scss';

export default function CookieConsent() {
  const { t } = useTranslation('common');
  const [consentGiven, setConsentGiven] = useState<boolean>(false);

  useEffect(() => {
    const isConsentGiven = sessionStorage.getItem('cookieConsent'); // TODO: sessionStorage se tiene que hacer a través de un "servicio"

    if (isConsentGiven) {
      setConsentGiven(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('cookieConsent', 'true');
    setConsentGiven(true);
  };

  return (
    <div>
      {!consentGiven && (
        <div className={styles.cookieConsent} data-testid="cookieConsent">
          <p>{t('cookieConsent')}</p>
          <button type="button" onClick={handleAccept}>
            {t('accept')}
          </button>
        </div>
      )}
    </div>
  );
}
