import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRty07kuWt3Z7x1bWWxnm-Gd-b7Kw2oC8',
  authDomain: 'readinglistapp-4d836.firebaseapp.com',
  projectId: 'readinglistapp-4d836',
  storageBucket: 'readinglistapp-4d836.appspot.com',
  messagingSenderId: '52320134151',
  appId: '1:52320134151:web:869cc3eaca390d8586f6a2',
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
