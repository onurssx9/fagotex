const firebase = require('firebase');
const config = {
  apiKey: 'AIzaSyBcR-rpqnkH0-rHntMJmk1-PiGXjQknfoU',
  authDomain: 'fagotex-f6586.firebaseapp.com',
  databaseURL: 'https://fagotex-f6586.firebaseio.com',
  projectId: 'fagotex-f6586',
  storageBucket: 'fagotex-f6586.appspot.com',
  messagingSenderId: '99552855073',
};
firebase.initializeApp(config);

module.exports = firebase;
