import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "REMOVED",
  authDomain: "REMOVED",
  projectId: "REMOVED",
  storageBucket: "REMOVED",
  messagingSenderId: "REMOVED",
  appId: "REMOVED",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export default firebase;
