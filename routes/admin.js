var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/';

/* GET users listing. */
// router.get('/', function (req, res) {
//   res.render('admin',{title:"admin"});
// });

router.get('/admin_login', function (req, res, next) {
  res.redirect('/dashboard.html');
});


module.exports = router;

