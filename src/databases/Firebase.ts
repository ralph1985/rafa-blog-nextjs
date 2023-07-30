import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from '../../firebase.config';

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
