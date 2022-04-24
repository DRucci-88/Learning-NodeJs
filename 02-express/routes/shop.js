const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, _) => {
  console.log('In default middleware');
  console.log(req.method);
  // res.send('<h1>Hello from Express</h1>')
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;