import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCydgdgvjZEHXDO-9I0EISzC8qmVvSwQ18',
  authDomain: 'route-fd07e.firebaseapp.com',
  projectId: 'route-fd07e',
  storageBucket: 'route-fd07e.firebasestorage.app',
  messagingSenderId: '45417104649',
  appId: '1:45417104649:web:60d039354d6e35de0ebfd8',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
