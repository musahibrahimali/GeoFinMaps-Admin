import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjkxejcQmbZD_mKUPxJv-MoxktnGqJEw0",
    authDomain: "geofinmaps-gh.firebaseapp.com",
    projectId: "geofinmaps-gh",
    storageBucket: "geofinmaps-gh.appspot.com",
    messagingSenderId: "489470082081",
    appId: "1:489470082081:web:3e6f3a489784b2ac5cb760",
    measurementId: "G-16NLL3J06X"
};


const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export default firebaseClient;
