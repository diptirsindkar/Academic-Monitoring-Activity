var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var url = 'mongodb+srv://root:root@ama-ylzfp.mongodb.net/test?retryWrites=true';

/* GET users listing. */
router.post('/stu_login', function (req, res, next) {
  get_data(url, "ama", "student", stu_login,{"id":req.body.username});
  function stu_login(result){
    console.log(result);
    if(result[0].password == req.body.password){
      req.session.student = result[0];
      res.redirect("/student5.html");
    }else{
      res.redirect("/");
    }
  }
});

router.post('/sta_login', function (req, res) {
  get_data(url, "ama", "staff", staff_login,{"id":req.body.username});
  function staff_login(result){
    console.log(result);
    if(result[0].password == req.body.password){
      req.session.staff = result[0];
      res.redirect("/staff.html");
    }else{
      res.redirect("/");
    }
  }
});

router.get('/get_student', function (req, res) {
  res.send(req.session.student);
});
router.get('/get_student_dir', function (req, res) {
  get_data(url, "ama", "student", dir,{});
  function dir(result){
    res.send(result);
  }
});
router.get('/get_staff_dir', function (req, res) {
  get_data(url, "ama", "staff", dir,{});
  function dir(result){
    res.send(result);
  }
});

router.get('/get_staff', function (req, res) {
  res.send(req.session.staff);
});

router.post('/add_student', function (req, res) {
  insert_data(url, "ama", "student", req.body);
  console.log(req.body);
});




var get_data = function (url, db_name, collection, fun, query) {
  mongo.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(db_name);
      dbo.collection(collection).find(query).toArray(function (err, result) {
          if (err) throw err;
          db.close();
          fun(result);
      });
  });
};

var insert_data = function (url, db_name, collection, data) {

  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(db_name);
    dbo.collection(collection).insertOne(data, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}

module.exports = router;
