import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyAn3t9ISQe8m4roPCWJVCPNRWxSE3nvuQY",
    authDomain: "sharewithme-46e7b.firebaseapp.com",
    projectId: "sharewithme-46e7b",
    storageBucket: "sharewithme-46e7b.appspot.com",
    messagingSenderId: "1081190850776",
    appId: "1:1081190850776:web:9a0053f4ce1f40d918b7ad",
    measurementId: "G-W6E3G0FEWT"
};

firebase.initializeApp(config);

export default firebase.firestore();