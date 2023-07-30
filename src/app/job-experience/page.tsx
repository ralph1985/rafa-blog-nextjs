import useTranslation from 'next-translate/useTranslation';
import { JobProps } from 'models/Job';
import DB from 'db';

export default async function JobExperiencePage() {
  const { t } = useTranslation('job-experience');
  let jobs: JobProps[] = [];

  try {
    jobs = await DB.getJobs();
  } catch (e) {
    console.error(e); // TODO: hacer gestión de errores (Bugsnag o similar)
  }

  return (
    <section className="page">
      <h2>{t('job-experience')}</h2>
      <div>ASDF</div>
      <ul>
        {jobs.map(({ id, name }) => (
          <li key={id}>
            {id} - {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
