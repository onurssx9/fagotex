const express = require('express');
const router = express.Router();

router.get('/', req => {
  console.log(req.query.gid);
});

module.exports = router;
