import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBvV5uD4cK6XxPOC6TYoKOoHe4KMWn2hYQ",
  authDomain: "disneyplus-clone-7ddc4.firebaseapp.com",
  projectId: "disneyplus-clone-7ddc4",
  storageBucket: "disneyplus-clone-7ddc4.appspot.com",
  messagingSenderId: "175688681920",
  appId: "1:175688681920:web:40d66a0d99155755422025"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider};
export default db;
