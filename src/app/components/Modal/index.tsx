'use client';

import useTranslation from 'next-translate/useTranslation';
// import styles from './index.module.scss'; // TODO: eliminar si no se usa
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

type ModalProps = {
  title: string;
  children: string | React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export default function Modal({ title, children, open, onClose }: ModalProps) {
  const { t } = useTranslation('common');

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
