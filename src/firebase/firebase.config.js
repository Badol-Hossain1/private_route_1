// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCydgdgvjZEHXDO-9I0EISzC8qmVvSwQ18',
  authDomain: 'route-fd07e.firebaseapp.com',
  projectId: 'route-fd07e',
  storageBucket: 'route-fd07e.firebasestorage.app',
  messagingSenderId: '45417104649',
  appId: '1:45417104649:web:60d039354d6e35de0ebfd8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
