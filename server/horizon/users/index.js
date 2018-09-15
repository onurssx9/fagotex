const express = require('express');
const firebase = require('../Firebase');
const router = express.Router();

const db = firebase.auth().app.database();
// Get All User
router.get('/', (_, res) => {
  db.ref('users').once(
    'value',
    snapshot => {
      res.send({
        status: true,
        users: snapshot.val(),
      });
    },
    () => {
      res.send({ status: false, message: 'Missing Parameters' });
    },
  );
});

module.exports = router;
