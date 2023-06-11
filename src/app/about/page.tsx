import useTranslation from 'next-translate/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <section className="page">
      <h2>{t('about')}</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum accusantium obcaecati sit, saepe, iure deserunt, ut eius ratione
          assumenda nam eligendi amet incidunt nemo. Sequi dicta eum soluta. Quas!
        </p>
      </div>
    </section>
  );
}
