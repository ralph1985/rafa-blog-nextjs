import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('home');

  return (
    <section>
      <h1>{t('home')}</h1>
    </section>
  );
}
