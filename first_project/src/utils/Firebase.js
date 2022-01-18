import {initializeApp, getApps} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7AA-XcJsz6vQFbu_p2l9NxzGRo0kf5bI',
  authDomain: 'instagram-3840c.firebaseapp.com',
  projectId: 'instagram-3840c',
  storageBucket: 'instagram-3840c.appspot.com',
  messagingSenderId: '94017072906',
  appId: '1:94017072906:web:4fec746f14b36215fb54f3',
  measurementId: 'G-R3JYFF2TPL',
};

if (!getApps().length) initializeApp(firebaseConfig);

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
};
