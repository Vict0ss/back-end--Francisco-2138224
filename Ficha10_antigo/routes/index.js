var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'loginMessage' });
});Ficha10_antigo/routes/index.js

router.get('/signup', function(req, res) {  
  res.render('signup', { title: 'signupMessage' });
});

router.post('/signup', indexController.signup);

module.exports = router;
