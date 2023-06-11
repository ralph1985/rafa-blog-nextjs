import useTranslation from 'next-translate/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation('contact');

  return (
    <section className="page">
      <h2>{t('contact')}</h2>
      <div>
        <input />
        <br />
        <textarea />
      </div>
    </section>
  );
}
