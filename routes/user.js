var express = require('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var User   = require('../models/user');
router.use(bodyParser.json()); //turns POST and PUT JSON into req.body object
router.use(function(req,res,next){
  res.set('Access-Control-Allow-Origin',req.headers.origin || req.host);
  res.set('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', "Content-Type");
  res.set('Access-Control-Allow-Credentials', "true");
  //res.set('Content-Type', 'application/json');
  next();
});

/* GET users listing. */
router.get('/', User.getAll);
router.get('/:id', User.getOne);

router.post('/', User.create);

module.exports = router;
