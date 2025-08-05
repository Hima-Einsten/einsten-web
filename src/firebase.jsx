// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCqmgv9METWuM2QALn4-zYMScgFC9P6s0",
  authDomain: "hima-einsten.firebaseapp.com",
  projectId: "hima-einsten",
  storageBucket: "hima-einsten.appspot.com",
  messagingSenderId: "730376233770",
  appId: "1:730376233770:web:4e0952cbf06b400c73b453",
  measurementId: "G-M36BEWHKS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
