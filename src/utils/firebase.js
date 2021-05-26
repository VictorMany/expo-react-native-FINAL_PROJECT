import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyC8qLqv0XZmwhM8mO66op8APz7FrqsN-Hc",
    authDomain: "prueba-a4c30.firebaseapp.com",
    databaseURL: "https://prueba-a4c30-default-rtdb.firebaseio.com",
    projectId: "prueba-a4c30",
    storageBucket: "prueba-a4c30.appspot.com",
    messagingSenderId: "218602599538",
    appId: "1:218602599538:web:9e2a7c194a534061497eeb"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);