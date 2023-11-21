// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDT0ReiRbfmE1iYNiseAkExpAmNcU-jJWs",
    authDomain: "kibby-2cd8c.firebaseapp.com",
    projectId: "kibby-2cd8c",
    storageBucket: "kibby-2cd8c.appspot.com",
    messagingSenderId: "453662012145",
    appId: "1:453662012145:web:226ec559285a1fd0882f50",
    measurementId: "G-J1TMSVRZ0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);