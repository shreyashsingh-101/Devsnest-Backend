var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require("../controllers/register");
var Busboy = require("busboy");
var csv = require("fast-csv");

router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'shrey';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.render('index', { title: JSON.stringify(req.session.user) })
});

router.get('/add-db', function(req, res) {
  require('../utils/init');
});

router.put('/csv', function(req, res) {
  console.log('coming in here')
  var busboy = new Busboy({ headers: req.headers });
    busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
      file.pipe(csv.parse({ headers: true })).on("data", function (data) {
        console.log("Data:", data);
      });
    });
    busboy.on("finish", function () {
      console.log("Done parsing.");
      res.status(200).end();
    });
    req.pipe(busboy);
})

/**
 * @requires { email, password, confirmPasswrod } - req.body
 * @description
 */
router.post('/register', registerInitialCheck, register);

module.exports = router;
