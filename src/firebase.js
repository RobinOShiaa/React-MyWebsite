import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCr6GjoS8N6cZ7XDc4Jz3vexrgm3qqqhzs",
  authDomain: "contact-form-45495.firebaseapp.com",
  databaseURL: "https://contact-form-45495-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-form-45495",
  storageBucket: "contact-form-45495.appspot.com",
  messagingSenderId: "1025946422512",
  appId: "1:1025946422512:web:f3406fe96ce67493f94635",
  measurementId: "G-KHHZEKDB3Q"

})

const db = firebaseApp.firestore()

export {db}