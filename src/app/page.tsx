import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <section className="page">
      <h2>{t('home')}</h2>
      <div>
        <p>Hola</p>
      </div>
    </section>
  );
}
