import Job from 'models/Job';
import Skill from 'models/Skill';
import Firebase from '../databases/Firebase';

// TODO: ¿esto es singleton?

const db = new Firebase();
const methods = {
  async getJobs() {
    const jobs = await db.getAllDocsFromCollection('jobs');

    return jobs.map((job) => {
      const { id, name } = job.data();

      return new Job({ id, name });
    });
  },

  async getSkills() {
    const skills = await db.getAllDocsFromCollection('skills');

    return skills.map((skill) => {
      const { id, name } = skill.data();

      return new Skill({ id, name });
    });
  },
};

export default methods;
