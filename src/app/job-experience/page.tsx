import useTranslation from 'next-translate/useTranslation';
import ErrorMessage from '@components/Notifications/ErrorMessage';
import DB, { DatabaseError } from 'db';

export default async function JobExperiencePage() {
  const { t } = useTranslation('job-experience');

  const { jobs, hasError, error } = await DB.getJobs();

  return (
    <section className="page">
      <h2>{t('job-experience')}</h2>
      <div>ASDF</div>
      {(hasError && error instanceof DatabaseError && <ErrorMessage message={error.message} title={error.title} />) || (
        <ul>
          {jobs.map(({ id, name }) => (
            <li key={id}>
              {id} - {name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
