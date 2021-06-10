import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC5uHexZFzsPGplKypDcH5wdrsSini8cus",
    authDomain: "facebook-clone-20102.firebaseapp.com",
    projectId: "facebook-clone-20102",
    storageBucket: "facebook-clone-20102.appspot.com",
    messagingSenderId: "705798917868",
    appId: "1:705798917868:web:c95e2a8d489821ae111fc9"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  const storage= firebase.storage();
  

  export {  db , storage};