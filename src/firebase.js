import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB8mBiDBIBZ57bkWZCESvoveJ6Tr4Dq-EI",
    authDomain: "twitter-clone-c245a.firebaseapp.com",
    databaseURL: "https://twitter-clone-c245a.firebaseio.com",
    projectId: "twitter-clone-c245a",
    storageBucket: "twitter-clone-c245a.appspot.com",
    messagingSenderId: "22611990835",
    appId: "1:22611990835:web:af6412382f25428d74c646",
    measurementId: "G-DTFRKGJQVB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
