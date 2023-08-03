import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../../firebase.config';

export const FIREBASE_METHODS = {
  GET_ALL_DOCS_FROM_COLLECTION: 'getAllDocsFromCollection',
};

export default class Firebase {
  db;

  constructor() {
    this.db = getFirestore(firebaseApp);
  }

  async getAllDocsFromCollection(collectionId: string) {
    const docRef = collection(this.db, collectionId);
    const querySnapshot = await getDocs(docRef);

    return querySnapshot.docs;
  }
}
