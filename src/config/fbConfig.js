import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


// Firebase Config
var fbConfig = {
    apiKey: "AIzaSyBdzcHE6001az-PGSrk2z-WTf_6Hkc9mIA",
    authDomain: "mario-planner-kg.firebaseapp.com",
    databaseURL: "https://mario-planner-kg.firebaseio.com",
    projectId: "mario-planner-kg",
    storageBucket: "",
    messagingSenderId: "201585773561",
    appId: "1:201585773561:web:a56de7fdbaa8b1ed"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;