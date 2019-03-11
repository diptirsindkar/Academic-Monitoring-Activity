var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/stu_login', function (req, res) {
  res.redirect('/student5.html');
});
router.get('/sta_login', function (req, res) {
  res.redirect('/staff.html');
});
router.post('/add_student', function (req, res) {
  console.log(req.body);
});

module.exports = router;
