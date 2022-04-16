// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5oQYAZq-DFLxtSC-CuRSWk9SjHx_A02E",
    authDomain: "router-firebase-integrat-bd9b6.firebaseapp.com",
    projectId: "router-firebase-integrat-bd9b6",
    storageBucket: "router-firebase-integrat-bd9b6.appspot.com",
    messagingSenderId: "479877406320",
    appId: "1:479877406320:web:447e90f1ac4660a7259eb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app