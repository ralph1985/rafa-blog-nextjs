import useTranslation from 'next-translate/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation('made-with');

  return (
    <section>
      <h1>{t('made-with')}</h1>
    </section>
  );
}
