const express = require('express');
const router = express.Router();
const firebase = require('../Firebase');

const db = firebase.auth().app.database();

const getUser = userId => db.ref(`users/${userId}`).once('value');

const createUser = userObject =>
  db.ref(`users/${userObject.googleId}`).set(userObject);

router.get('/', (req, res) => {
  if (!req.query.userId) {
    res.send({ status: false, message: 'Missing Parameters' });
  }
  getUser(req.query.userId).then(snapshot => {
    res.send({ status: snapshot.exists(), userObject: snapshot });
  });
});

router.post('/login', (req, res) => {
  if (!req.body.googleId) {
    res.send({ status: false, message: 'Missing Parameters' });
  }

  getUser(req.body.googleId).then(snapshot => {
    if (snapshot.exists()) {
      res.send({
        status: false,
        message: 'Users already created',
        userObject: snapshot,
      });
    }
    createUser(req.body).then(() => ({
      status: true,
      message: 'create succeed',
    }));
  });
});

router.post('/update', (req, res) => {
  if (!req.body.googleId) {
    res.send({ status: false, message: 'Missing Parameters' });
  }

  getUser(req.body.googleId).then(snapshot => {
    if (snapshot.exists()) {
      db.ref(`user/${req.body.googleId}`).update(req.body);
      res.send({
        status: true,
        message: 'Update Succeed',
        userObject: snapshot,
      });
    }
    createUser(req.body).then(() => ({
      status: true,
      message: 'Create succeed',
    }));
  });
});

module.exports = router;
