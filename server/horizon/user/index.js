const express = require('express');
const router = express.Router();
const firebase = require('../Firebase');

const db = firebase.auth().app.database();

const getUser = userId => db.ref(`users/${userId}`).once('value');

const createUser = userObject => {
  if (userObject.googleId === '') return;
  db.ref(`users/${userObject.googleId}`).set(userObject);
};

const addComment = payload =>
  db
    .ref(`users/${payload.recieverId}/comments/recieved`)
    .push({
      text: payload.text,
    })
    .then(status => {
      if (status) {
        db.ref('comments/').push({
          text: payload.text,
          recieverId: payload.recieverId,
          senderId: payload.senderId,
        });
      }
      return status;
    });

const findUserBySessionId = sessionId =>
  db.ref(`sessions/${sessionId}`).once('value');

const removeSessionById = sessionId => db.ref(`sessions/${sessionId}`).remove();

router.get('/findUserBySessionId', (req, res) =>
  findUserBySessionId(req.query.id).then(userId => {
    getUser(userId.val()).then(snapshot => {
      res.send(snapshot.val());
    });
  }),
);

router.post('/logout', (req, res) => {
  removeSessionById(req.body.id).then(() => {
    res.send({ status: true, message: 'Session Removed' });
  });
});

router.get('/', (req, res) => {
  if (!req.query.userId) {
    res.send({ status: false, message: 'Missing Parameters' });
  }
  getUser(req.query.userId).then(snapshot => {
    res.send({ status: snapshot.exists(), userObject: snapshot.val() });
  });
});

router.post('/login', async (req, res) => {
  if (req.body.sessionId !== '') {
    const usersData = await findUserBySessionId(req.body.sessionId).then(
      userId => {
        if (!userId.exists()) {
          return false;
        }
        return getUser(userId.val());
      },
    );
    res.send({
      status: !!usersData,
      message: 'Users already created',
      userObject: usersData,
    });
  }
  if (req.body.googleId === '') {
    res.send({ status: false, message: 'Missing Parameters' });
  }

  if (req.body.googleId !== '' && req.body.sessionId !== '') {
    db.ref(`sessions/${req.body.sessionId}`).set(req.body.googleId);
  }

  await getUser(req.body.googleId).then(snapshot => {
    if (snapshot.exists()) {
      res.send({
        status: false,
        message: 'Users already created',
        userObject: snapshot.val(),
      });
    } else {
      createUser(req.body).then(() => ({
        status: false,
        message: 'create succeed',
      }));
    }
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
        status: false,
        message: 'Update Succeed',
        userObject: snapshot.val(),
      });
    }
    createUser(req.body).then(() => ({
      status: false,
      message: 'Create succeed',
    }));
  });
});

router.post('/addComment', (req, res) => {
  if (!req.body.senderId || !req.body.recieverId || !req.body.text) {
    res.send({ status: false, message: 'Missing Parameters' });
  }

  addComment(req.body).then(status => {
    res.send({
      status,
      message: status
        ? "addComment could'nt complete"
        : 'comment adding succeed',
    });
  });
});

module.exports = router;
