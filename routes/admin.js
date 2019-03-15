var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb+srv://root:root@ama-ylzfp.mongodb.net/test?retryWrites=true';

/* GET users listing. */
// router.get('/', function (req, res) {
//   res.render('admin',{title:"admin"});
// });

router.get('/admin_login', function (req, res, next) {
  var id = req.body.username;
  var pass = req.body.password;
  console.log(id, pass, req.body);

  function login_data(result) {
    for (let i = 0; i < result.length; i++) {
      if (id == result[i].Username) {
        if (pass == result[i].Password) {
          req.session.user = true;
          req.session.user.id = id;
        }
      }
    }
    if (req.session.user) {
      console.log(req.session.user);
      res.redirect('/dashboard.html');
    } else {
      console.log(req.session.user);
    }
  }

  get_data(url, "ama", "admin", login_data);
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

module.exports = router;

