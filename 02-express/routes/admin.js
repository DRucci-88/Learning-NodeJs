const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/add-product', (req, res, _) => {
  console.log('In Add Product middleware');
  // res.send('<h1>Hello from Express</h1>')
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Save</button></form>')
  res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (req   , res, _) => {
  console.log('In product middleware')
  console.log(req.body);
  console.log(req.body.title);
  res.redirect('/');
});


module.exports = router;