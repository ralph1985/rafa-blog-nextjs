'use client';

import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '@mui/material/Button';
import styles from './index.module.scss';

export default function CookieConsent() {
  const { t } = useTranslation('common');
  const [consentGiven, setConsentGiven] = useState<boolean>(true);

  useEffect(() => {
    const isConsentGiven = sessionStorage.getItem('cookieConsent'); // TODO: sessionStorage se tiene que hacer a través de un "servicio"

    if (isConsentGiven) {
      setConsentGiven(true);
    } else {
      setConsentGiven(false);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('cookieConsent', 'true');
    setConsentGiven(true);
  };

  return (
    (!consentGiven && (
      <div className={styles.banner} data-testid="cookieConsent">
        <p>{t('cookieConsent')}</p>
        <Button variant="contained" onClick={handleAccept}>
          {t('accept')}
        </Button>
      </div>
    )) ||
    null
  );
}
