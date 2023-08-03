import Job from 'models/Job';
import Skill from 'models/Skill';
import { FirebaseError } from '@firebase/util';
import Firebase, { FIREBASE_METHODS } from '../databases/Firebase';

const { GET_ALL_DOCS_FROM_COLLECTION } = FIREBASE_METHODS;

// TODO: ¿este fichero es singleton?

export class DatabaseError {
  message: string;

  title: string;

  constructor(code: string, name: string) {
    this.message = code;
    this.title = name;
  }
}

const db = new Firebase();
const firebaseAllowedMethods = {
  [GET_ALL_DOCS_FROM_COLLECTION]: (collection: string) => db.getAllDocsFromCollection(collection),
};
const errorHandler = (e: unknown) => {
  if (e instanceof FirebaseError) {
    // TODO: trazar error (Bugsnag)
    return new DatabaseError(e.code, e.name);
  }

  // TODO: trazar error unknown

  return e;
};
const getData = async (method: keyof typeof firebaseAllowedMethods, collection: string) => {
  let data;

  try {
    data = await firebaseAllowedMethods[method](collection);
  } catch (e: unknown) {
    return {
      hasError: true,
      error: errorHandler(e),
    };
  }

  return { data, hasError: false };
};

const methods = {
  async getJobs() {
    const data = await getData(GET_ALL_DOCS_FROM_COLLECTION, 'jobs');

    return {
      ...data,
      jobs:
        data.data?.map((job) => {
          // TODO: esto irá a un normalizador...
          const { id, name } = job.data();

          return new Job({ id, name });
        }) || [],
    };
  },

  async getSkills() {
    const data = await getData(GET_ALL_DOCS_FROM_COLLECTION, 'skills');

    return {
      ...data,
      skills:
        data.data?.map((skill) => {
          // TODO: esto irá a un normalizador...
          const { id, name } = skill.data();

          return new Skill({ id, name });
        }) || [],
    };
  },
};

export default methods;
