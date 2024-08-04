import Rebase from 're-base'
import firebase from 'firebase'
//Use this file to put your Firebase configurations here and then rename it to base.js

const app = firebase.initializeApp({
    // apiKey: "xxx",
    // authDomain: "xxx",
    // databaseURL: "xxx",
    // projectId: "xxx",
    // storageBucket: "",
    // messagingSenderId: "xxx",
    apiKey: "AIzaSyCQf3Mz3TiM7SyPw9FubwRX8JbTwtwPRKQ",
    authDomain: "thiepcuoi-a8d6e.firebaseapp.com",
    databaseURL: "https://thiepcuoi-a8d6e-default-rtdb.firebaseio.com",
    projectId: "thiepcuoi-a8d6e",
    storageBucket: "thiepcuoi-a8d6e.appspot.com",
    messagingSenderId: "520809800370",
    appId: "1:520809800370:web:23cb4aeaba9ec11a6f5fab"
})
// const db = firestore.data();
// console.log(db);
console.log(app);
const base = Rebase.createClass(app.database())
export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'google': new firebase.auth.GoogleAuthProvider()
}
export const auth = firebase.auth()
export default base