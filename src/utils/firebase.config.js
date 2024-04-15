// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmnoO1NUvcwHJSauYWdxBOIqRWGCjZsgY",
    authDomain: "fashionfusion-60290.firebaseapp.com",
    projectId: "fashionfusion-60290",
    storageBucket: "fashionfusion-60290.appspot.com",
    messagingSenderId: "1008944219445",
    appId: "1:1008944219445:web:4410ef535c5f227726787c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;