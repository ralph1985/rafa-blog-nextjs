import useTranslation from 'next-translate/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <section>
      <h1>{t('contact')}</h1>
      <input />
      <textarea />
    </section>
  );
}
