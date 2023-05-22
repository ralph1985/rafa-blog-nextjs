import useTranslation from 'next-translate/useTranslation';
import NavBar from 'components/Navbar/NavBar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { ThemeContextProvider } from 'context/ThemeContext';

import 'normalize.css/normalize.css';
import './layout.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useTranslation('home');

  return (
    <html lang={lang}>
      <body>
        <ThemeContextProvider>
          <Header />
          <div className="container">
            <NavBar />
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
