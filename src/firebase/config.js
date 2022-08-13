import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDynX9VRDhx-6IU2S7YWVHAShb2aeuIB0Q",
    authDomain: "our-blog-system-project.firebaseapp.com",
    projectId: "our-blog-system-project",
    storageBucket: "our-blog-system-project.appspot.com",
    messagingSenderId: "425962068236",
    appId: "1:425962068236:web:25128f9c55ccafa09e9129"
  };
//   init firebase
  firebase.initializeApp(firebaseConfig)

  // database setup
  let db = firebase.firestore();

  // time setup
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp};
  