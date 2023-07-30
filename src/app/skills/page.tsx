import useTranslation from 'next-translate/useTranslation';
import { SkillProps } from 'models/Skill';
import DB from 'db';

export default async function JobExperiencePage() {
  const { t } = useTranslation('skills');
  let skills: SkillProps[] = [];

  try {
    skills = await DB.getSkills();
  } catch (e) {
    console.error(e); // TODO: hacer gestión de errores (Bugsnag o similar)
  }

  return (
    <section className="page">
      <h2>{t('skills')}</h2>
      <div>ASDF</div>
      <ul>
        {skills.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
