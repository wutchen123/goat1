const express = require('express');
const router = express.Router();
const { Login } = require('../controllers/authController');
// const { showUser } = require('../controllers/authController');

router.post('/authLogin', Login);
// router.get('/authshowdataUser' , showUser)

module.exports = router;