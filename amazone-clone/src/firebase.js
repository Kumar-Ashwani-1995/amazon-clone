import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDS_XdJal3zV3LrNDcABMEu2jfvhTVVLso",
    authDomain: "challenge-df3e6.firebaseapp.com",
    projectId: "challenge-df3e6",
    storageBucket: "challenge-df3e6.appspot.com",
    messagingSenderId: "759344290991",
    appId: "1:759344290991:web:10a419ae610094e70d485a",
    measurementId: "G-VL2QCH6M6M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };