const express = require('express');
const router = express.Router();
const firebase = require('../Firebase');

router.get('/', (req, res) => {
  if (!req.query.googleId) {
    res.send("{status:false, message:'Missing Parameters'}");
  }
  firebase
    .auth()
    .app.database()
    .ref(`users/${req.query.googleId}`)
    .once('value')
    .then(snapshot => {
      res.send(snapshot);
    });
});

router.post('/', (req, res) => {
  if (!req.body.googleId) {
    res.send("{status:false, message:'Missing Parameters'}");
  }
  console.log(req.body.googleId);
  firebase
    .auth()
    .app.database()
    .ref(`users/${req.body.googleId}`)
    .set(req.body)
    .then(createdUser => {
      console.log(createdUser);
      res.send(createdUser);
    });
});

module.exports = router;
