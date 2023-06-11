import useTranslation from 'next-translate/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation('made-with');

  return (
    <section>
      <h1>{t('made-with')}</h1>
      <div>
        <a href="https://github.com/ralph1985/rafa-blog-nextjs" target="_blank">
          {t('repository')}
        </a>
      </div>
    </section>
  );
}
