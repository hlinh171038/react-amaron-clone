// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw9r28F5YDakoDtnUre0l3GqUdkwR6e2o",
  authDomain: "fir-7c5c4.firebaseapp.com",
  projectId: "fir-7c5c4",
  storageBucket: "fir-7c5c4.appspot.com",
  messagingSenderId: "244178945180",
  appId: "1:244178945180:web:522fe4140c557894169959",
  measurementId: "G-SP4S5X88L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);