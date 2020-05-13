import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANh0W7dOJuOtewuQK_Fj6C8Hfl1vdmfE",
  authDomain: "nathan-and-jen-forever.firebaseapp.com",
  databaseURL: "https://nathan-and-jen-forever.firebaseio.com",
  projectId: "nathan-and-jen-forever",
  storageBucket: "nathan-and-jen-forever.appspot.com",
  messagingSenderId: "564350688088",
  appId: "1:564350688088:web:68e50ed64a159c6f80a32d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;