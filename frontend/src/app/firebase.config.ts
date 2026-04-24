import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCHMi3PYDLjNV_hXj24yuf-hk13fPikLO8',
  authDomain: 'sidge-ac4eb.firebaseapp.com',
  projectId: 'sidge-ac4eb',
  storageBucket: 'sidge-ac4eb.appspot.com',
  messagingSenderId: '839583362140',
  appId: '1:839583362140:web:0e519787a478daa839ca99',
  measurementId: 'G-6NXL3CVS4L'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ exporta como "auth"
