var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'loginMessage' });
});

router.get('/signup', function(req, res) {
  res.render('signup', { title: 'signupMessage' });
});

router.post('/signup', indexController.signup);

module.exports = router;
