const express = require('express');
const router = express.Router();
const user = require('./user');
const users = require('./users');

router.use('/user', user);
router.use('/users', users);

module.exports = router;
