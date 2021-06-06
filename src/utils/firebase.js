import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyDVVLGzoRCfHbaxaKLrPTWdHmtIkwCEVm8",
    authDomain: "rn-final-project-29064.firebaseapp.com",
    projectId: "rn-final-project-29064",
    storageBucket: "rn-final-project-29064.appspot.com",
    messagingSenderId: "97677815553",
    appId: "1:97677815553:web:bdb806ecc8c5a7e10cf500"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);