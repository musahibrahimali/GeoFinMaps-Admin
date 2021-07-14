import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0wAbddyp2sZube4CMTcUFRlhUHa5mWc4",
    authDomain: "geofinmaps.firebaseapp.com",
    projectId: "geofinmaps",
    storageBucket: "geofinmaps.appspot.com",
    messagingSenderId: "658008734118",
    appId: "1:658008734118:web:b181b72ba7b0ef7fd37767",
    measurementId: "G-Y429QCWS83"
};

const firebaseClient = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

export default firebaseClient;