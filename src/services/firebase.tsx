import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDKk0vxnlWSvNo1xvPZ4nfGf4UM5ZpS2qs",
    authDomain: "twitter-clone-4f43f.firebaseapp.com",
    projectId: "twitter-clone-4f43f",
    storageBucket: "twitter-clone-4f43f.appspot.com",
    messagingSenderId: "626248322507",
    appId: "1:626248322507:web:fcc335a2070fd783ed3a4e",
    measurementId: "G-CZWMGLC4HM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db