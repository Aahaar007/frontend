// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj4pSDh0l-xVbM_q0Jm9djUTjZoWiKE48",
  authDomain: "aahar-a54d3.firebaseapp.com",
  projectId: "aahar-a54d3",
  storageBucket: "aahar-a54d3.appspot.com",
  messagingSenderId: "1072200786550",
  appId: "1:1072200786550:web:c4bf6d69713ce615fe7557",
  measurementId: "G-GKN6D08R7Y",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
