const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const userDetail = require('../controller/user.controller')


router.post('/details', userDetail.userDetail)

module.exports = router