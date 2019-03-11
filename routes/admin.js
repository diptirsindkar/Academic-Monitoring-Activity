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
router.get('/login', function (req, res, next) {
  console.log("logged in")
});


router.get('/admin_login', function (req, res, next) {
  res.redirect('/dashboard.html');
});
router.get('/dir', function (req, res, next) {
  res.render('admin/directory', { title: "dir" });
});
router.get('/profile/staff', function (req, res, next) {
  console.log("profile");
});


module.exports = router;

