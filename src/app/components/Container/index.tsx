'use client';

import { useState } from 'react';

import CookieConsent from '@components/CookieConsent';
import Footer from '@components/Footer';
import Header from '@components/Header';
import NavBar from '@components/Navbar';
import styles from './index.module.scss';

export default function Container({ children }: { children: React.ReactNode }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleNavbarOnOpen() {
    setIsNavbarOpen(true);
  }
  function handleNavbarOnClose() {
    setIsNavbarOpen(false);
  }

  return (
    <>
      <NavBar onOpen={() => handleNavbarOnOpen()} onClose={() => handleNavbarOnClose()} />
      <div className={`${styles.container} ${isNavbarOpen && styles.navbarOpened}`}>
        <Header />
        {children}
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}
