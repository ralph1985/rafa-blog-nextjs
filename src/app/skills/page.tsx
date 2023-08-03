import useTranslation from 'next-translate/useTranslation';
import ErrorMessage from '@components/Notifications/ErrorMessage';
import DB, { DatabaseError } from 'db';

export default async function JobExperiencePage() {
  const { t } = useTranslation('skills');

  const { skills, hasError, error } = await DB.getSkills();

  return (
    <section className="page">
      <h2>{t('skills')}</h2>
      <div>ASDF</div>
      {(hasError && error instanceof DatabaseError && <ErrorMessage message={error.message} title={error.title} />) || (
        <ul>
          {skills.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
