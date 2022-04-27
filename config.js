import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBm-30ADIc33z9qwAjEBDVkg-DYJcFkbTw",
  authDomain: "e-library-cf298.firebaseapp.com",
  projectId: "e-library-cf298",
  storageBucket: "e-library-cf298.appspot.com",
  messagingSenderId: "984533901753",
  appId: "1:984533901753:web:ae62478224e9228a0b9668"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
