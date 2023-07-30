import useTranslation from 'next-translate/useTranslation';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import getAllDocsFromCollection from '../../firebase/getAllDocsFromCollection';

export default async function JobExperiencePage() {
  const { t } = useTranslation('job-experience');
  let collections: QueryDocumentSnapshot<DocumentData, DocumentData>[] = [];

  try {
    collections = await getAllDocsFromCollection('jobs');
  } catch (e) {
    console.error(); // TODO: hacer gestión de errores (Bugsnag o similar)
  }

  return (
    <section className="page">
      <h2>{t('job-experience')}</h2>
      <div>ASDF</div>
      <ul>
        {collections.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
  );
}
