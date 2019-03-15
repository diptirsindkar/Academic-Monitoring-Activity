var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var url = 'mongodb+srv://root:root@ama-ylzfp.mongodb.net/test?retryWrites=true';

/* GET users listing. */
router.get('/stu_login', function (req, res) {
  var id = req.body.username;
  var pass = req.body.password;
  console.log(id, pass, req.body);

  function login_data(result) {
    for (let i = 0; i < result.length; i++) {
      if (id == result[i].Username) {
        if (pass == result[i].Password) {
          req.session.user = true;
          req.session.student = result[i];
        }
      }
    }
    if (req.session.user) {
      console.log(req.session.student);
      res.redirect('/student5.html');
    } else {
      console.log(req.session.user);
    }
  }

  get_data(url, "ama", "student", login_data);
});

router.get('/sta_login', function (req, res) {

});

router.get('/get_dummy', function (req, res) {
  res.send(req.session.student);
});

router.get('/get_student', function (req, res) {
  get_data(url, "ama", "student", display_stu);
  function display_stu(student) {
    res.send(student)
  }
});

router.post('/add_student', function (req, res) {
  insert_data(url, "ama", "student", req.body);
  console.log(req.body);
});






var get_data = function (url, db_name, collection, fun) {
  var return_data;
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(db_name);
    var query = {};
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
