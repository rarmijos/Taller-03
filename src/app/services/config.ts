import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyChGT57Hme1qwyGweVR9crgcTps5nUw7FE',
  authDomain: 'taller-nucleo3.firebaseapp.com',
  databaseURL: 'https://taller-nucleo3-default-rtdb.firebaseio.com',
  projectId: 'taller-nucleo3',
  storageBucket: 'taller-nucleo3.firebasestorage.app',
  messagingSenderId: '634801524413',
  appId: '1:634801524413:web:73f411cc05a7fe4de5b1d4',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
