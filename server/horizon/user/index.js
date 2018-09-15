const express = require('express');
const router = express.Router();
const firebase = require('../Firebase');

router.get('/', (req, res) => {
  if (!req.query.userId) {
    res.send("{status:false, message:'Missing Parameters'}");
  }
  firebase
    .auth()
    .app.database()
    .ref(`users/${req.query.userId}`)
    .once('value')
    .then(snapshot => {
      res.send({ status: true, userObject: snapshot });
    });
});

router.post('/', (req, res) => {
  if (!req.body.googleId) {
    res.send("{status:false, message:'Missing Parameters'}");
  }

  firebase
    .auth()
    .app.database()
    .ref(`users/${req.body.googleId}`)
    .set(req.body)
    .then(() => {
      res.send({ status: true });
    });
});

module.exports = router;
