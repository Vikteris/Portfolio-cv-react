import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
    
    apiKey: "AIzaSyBVW4AfxviK2lI2tV5fxNvRFVhrNueEL2o",
    authDomain: "react-porfolio-contact-form.firebaseapp.com",
    databaseURL: "https://react-porfolio-contact-form.firebaseio.com",
    projectId: "react-porfolio-contact-form",
    storageBucket: "react-porfolio-contact-form.appspot.com",
    messagingSenderId: "770940231814",
    appId: "1:770940231814:web:c03a20430e845bddf6f107"
    
});

var db = firebaseApp.firestore(); 

export { db };