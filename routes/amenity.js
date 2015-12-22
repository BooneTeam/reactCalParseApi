var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Amenity = require('../models/amenity');
router.use(bodyParser.json()); //turns POST and PUT JSON into req.body object
router.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', req.headers.origin || req.host);
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', "Content-Type");
  res.set('Access-Control-Allow-Credentials', "true");
  //res.set('Content-Type', 'application/json');
  next();
});

/* GET users listing. */
router.get('/', Amenity.getAll);
router.get('/:id', Amenity.getOne);


module.exports = router;
