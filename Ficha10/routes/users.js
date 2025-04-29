var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', userController.getAllUsers);
router.get('/id', userController.getAllUsers);
router.post('/', userController.getAllUsers);
router.delete('/', userController.getAllUsers);
router.put('/', userController.getAllUsers);

module.exports = router;
