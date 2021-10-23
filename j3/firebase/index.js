const firebaseConfig = {
     apiKey: "AIzaSyAJkhRGSq4j-7g9EJ6gwYjQ08s2CdMGOjA",
     authDomain: "sl-volodya.firebaseapp.com",
     projectId: "sl-volodya",
     storageBucket: "sl-volodya.appspot.com",
     messagingSenderId: "465667681668",
     appId: "1:465667681668:web:dd2b6e3a2e276a5d5981d1",
     measurementId: "G-044MS52412"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();