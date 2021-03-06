var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require("../controllers/register")

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


/**
 * @requires { email, password, confirmPasswrod } - req.body
 * @description
 */
router.post('/register', registerInitialCheck, register);

module.exports = router;
