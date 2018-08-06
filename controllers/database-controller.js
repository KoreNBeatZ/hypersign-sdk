
const config = {
    apiKey: "AIzaSyCABpwDKjScGcjeJFIuCz-l93T_gz5fZRM",
    authDomain: "thumbsignwallet.firebaseapp.com",
    databaseURL: "https://thumbsignwallet.firebaseio.com",
    projectId: "thumbsignwallet",
    storageBucket: "",
    messagingSenderId: "682045472027"
  };

const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

firebase.initializeApp(config);
const database = firebase.firestore();

const settings = {
  timestampsInSnapshots: true
};
database.settings(settings);

module.exports = database;