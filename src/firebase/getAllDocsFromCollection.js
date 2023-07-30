import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from './config';

export default async function getAllDocsFromCollection(collectionId) {
  const db = getFirestore(firebaseApp);
  const docRef = collection(db, collectionId);
  const querySnapshot = await getDocs(docRef);

  return querySnapshot.docs;
}
