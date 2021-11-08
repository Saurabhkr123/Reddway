import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDLfPkIo9L0r5bS0v4N-T6xKQGRhipCsYA",
  authDomain: "reddway-a10b1.firebaseapp.com",
  projectId: "reddway-a10b1",
  storageBucket: "reddway-a10b1.appspot.com",
  messagingSenderId: "607704040813",
  appId: "1:607704040813:web:c2ac94754ded62b0a74664"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
