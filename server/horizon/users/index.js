const express = require('express');
const router = express.Router();

router.get('/', () => {
  console.log(123);
});

module.exports = router;