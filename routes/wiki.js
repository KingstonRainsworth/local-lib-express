var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('Wiki home page');
});

router.get('/about', (req,res,next) => {
  res.send('about this wiki');
});

module.exports = router;
