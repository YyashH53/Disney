import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCi45uUq78xIw9QojenUrc832Kl8BhH_0Y",
    authDomain: "disneyplus-clone-4e27a.firebaseapp.com",
    projectId: "disneyplus-clone-4e27a",
    storageBucket: "disneyplus-clone-4e27a.appspot.com",
    messagingSenderId: "88414150365",
    appId: "1:88414150365:web:067b9f655b3aa103150534",
    measurementId: "G-NCV6J0F151"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  export { auth, provider, storage };
  export default db;

  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
