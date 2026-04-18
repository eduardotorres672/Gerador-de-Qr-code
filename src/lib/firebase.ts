import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp, doc, getDocFromServer } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Validation call required by system instructions
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export const uploadImage = async (file: File, userId: string) => {
  const storageRef = ref(storage, `logos/${userId}/${Date.now()}_${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);

export interface QRCodeData {
  id?: string;
  url: string;
  name: string;
  userId: string;
  config: {
    color1: string;
    color2: string;
    bgColor: string;
    cornerSquareColor: string;
    cornerDotColor: string;
    dotType: string;
    cornerSquareType: string;
    cornerDotType: string;
  };
  createdAt: any;
}

export const saveQRCode = async (data: Omit<QRCodeData, 'createdAt' | 'id'>) => {
  return addDoc(collection(db, 'qrcodes'), {
    ...data,
    createdAt: serverTimestamp()
  });
};

export const subscribeToHistory = (userId: string, callback: (qrs: QRCodeData[]) => void) => {
  const q = query(
    collection(db, 'qrcodes'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const qrs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as QRCodeData[];
    callback(qrs);
  });
};
