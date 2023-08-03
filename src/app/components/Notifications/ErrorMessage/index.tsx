'use client';

import { Alert, AlertTitle } from '@mui/material';
import styles from './index.module.scss';

type ErrorMessageProps = {
  title: string;
  message: string;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  const { title, message } = props;

  return (
    <div className={styles.error}>
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}
