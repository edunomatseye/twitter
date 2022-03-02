// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkljbMChKbTzokzyv_NeuDQx-waCnXANM",
  authDomain: "posterr-dbcc9.firebaseapp.com",
  projectId: "posterr-dbcc9",
  storageBucket: "posterr-dbcc9.appspot.com",
  messagingSenderId: "1040451894177",
  appId: "1:1040451894177:web:56ac83ece0571d25d0e9e0",
  measurementId: "G-0CHSSKELQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db