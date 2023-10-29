const express = require('express');
const userController = require('../controllers/userController');

let router = express.Router();

router.post('/user/signUp',userController.signUp);

module.exports = router;
