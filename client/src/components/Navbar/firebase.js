import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAKm0AVptl4F3LAEgbI786qbkJyvY8Z2uo",
    authDomain: "user-authentication-ce703.firebaseapp.com",
    databaseURL: "https://user-authentication-ce703.firebaseio.com",
    projectId: "user-authentication-ce703",
    storageBucket: "user-authentication-ce703.appspot.com",
    messagingSenderId: "446421803702"
};
firebase.initializeApp(config);
export default firebase;
