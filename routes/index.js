var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb+srv://root:root@ama-ylzfp.mongodb.net/test?retryWrites=true';
const nodemailer = require("nodemailer");

router.get('/index.html', function (req, res) {
    res.render('index', { title: "home" });
});

router.post('/admin', function (req, res) {
    
  });
  
router.get('/insert', function (req, res) {
    res.render('insert', { title: "insert" });
});

router.get('/chat', function (req, res) {
    res.render('admin/chat', { title: "ChatApp" });
});

router.get('/get-data', function (req, res, next) {

    res.send(get_data(url, "ama", "stu"));

    // res.json("hiii");
});

router.post('/insert', function (req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    mongo.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("ama");
        dbo.collection("stu").insertOne(item, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    res.redirect('/exe');
});

router.post('/update', function (req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id;

    mongo.connect(url, function (err, db) {
        assert.equal(null, err);
        var dbo = db.db("mydb");
        dbo.collection('customers').updateOne({ "_id": objectId(id) }, { $set: item }, function (err, result) {
            assert.equal(null, err);
            console.log('Item updated');
            console.log(item);
            db.close();
            var data = [];

            mongo.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                var query = {};
                dbo.collection("customers").find(query).toArray(function (err, result) {
                    if (err) throw err;
                    console.log(result);
                    db.close();
                    res.render('admin', { data: result });
                });
            });
        });
    });
});

router.post('/delete', function (req, res, next) {
    var id = req.body.id;
    mongo.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection('customers').deleteOne({ "_id": objectId(id) }, function (err, result) {
            if (err) throw err;
            db.close();
            console.log('Item deleted');
            var data = [];

            mongo.connect(url, function (err, db) {
                if (err) throw err;
                var dbo = db.db("mydb");
                var query = {};
                dbo.collection("customers").find(query).toArray(function (err, result) {
                    if (err) throw err;
                    db.close();
                    res.render('admin/directory', { data: result });
                });
            });
        });
    });
});

router.post('/login', function (req, res, next) {
    var isUser = false;
    var allowUser = false;
    var title = req.body.Username;
    var content = req.body.password;
    console.log(title, content, req.body);

    var login_data = function (result) {
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            if (title == result[i].title) {
                isUser = true;
            }
        }
        if (isUser) {
            req.session.user = true;
            allowUser = true;

        }
        console.log(allowUser);
        res.redirect('/student5.html');
    }
    get_data(url, "mydb", "customers", login_data, {});
});

router.get('/logout', function (req, res, next) {
    req.session.user = false;
    req.session.student = null;
    res.redirect('/');
});

router.get('/notification', function (req, res, next) {
    res.send(get_data(url, 'ama', 'noti',function (){}, {}));
});

router.post('/notification', function (req, res, next) {
    var notification_data = {
        header: req.body.header,
        content: req.body.content,
    };
    insert_data(url, 'ama', 'noti', notification_data);
});

router.get('/get_report', function (req, res, next) {
    var student = req.session.student.id;
    console.log(student);
    function report(report){
        res.send(report);
    }
    get_data(url, 'ama', 'report',report,{"id":student})
    
});

var get_data = function (url, db_name, collection, fun, query) {
    var return_data;
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
