
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAaMLdG4ezQo63dH7KSo18MG1DoNhkKPbI",
    authDomain: "unais-messenger-clone.firebaseapp.com",
    databaseURL: "https://unais-messenger-clone.firebaseio.com",
    projectId: "unais-messenger-clone",
    storageBucket: "unais-messenger-clone.appspot.com",
    messagingSenderId: "756803652484",
    appId: "1:756803652484:web:bdee24f17c8ae17aaf6bd1",
    measurementId: "G-T980CL4TLH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;