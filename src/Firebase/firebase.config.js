// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOYJX1DTuzs2IP0DZ4tMoUaDCYFib1bPQ",
  authDomain: "cosmetics-server-5aa92.firebaseapp.com",
  projectId: "cosmetics-server-5aa92",
  storageBucket: "cosmetics-server-5aa92.appspot.com",
  messagingSenderId: "469155147154",
  appId: "1:469155147154:web:3b4dab281eb8d75c62254b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
