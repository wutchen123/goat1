const express = require('express')
// const { upload } = require('../middleware/uploadfiles')
const router = express.Router()

const { insert } = require('../controllers/transfercontrollers')
router.post('/transInsertUser', insert)

module.exports = router
