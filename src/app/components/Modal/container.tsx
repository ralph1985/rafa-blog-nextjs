'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import Modal from '@components/Modal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const currentPage = usePathname();

  const handleOpenModal = () => {
    setModalOpen(true);

    router.push(`${currentPage}?modal=open`);
  };

  const handleCloseModal = useCallback(
    ({ goHistoryBack = true }) => {
      setModalOpen(false);

      if (goHistoryBack) {
        router.back();
      }
    },
    [router]
  );

  useEffect(() => {
    const handlePopState = () => {
      if (modalOpen) {
        handleCloseModal({ goHistoryBack: false });
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [modalOpen, handleCloseModal]);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Abrir ventana modal
      </Button>
      {modalOpen && (
        <Modal title="Ventana modal" open={modalOpen} onClose={() => handleCloseModal({ goHistoryBack: true })}>
          {children}
        </Modal>
      )}
    </>
  );
}
