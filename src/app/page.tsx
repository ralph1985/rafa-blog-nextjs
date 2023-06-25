import useTranslation from 'next-translate/useTranslation';
import ModalContainer from './components/Modal/container';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <section className="page">
      <h2>{t('home')}</h2>
      <div>
        <p>Hola</p>
      </div>
      <ModalContainer>
        <p>Contenido de la ventana modal</p>
      </ModalContainer>
    </section>
  );
}
