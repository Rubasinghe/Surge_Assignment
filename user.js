const express = require("express")
const { signin } = require("../controllers/user")
const {check} = require('express-validator')
const router = express.Router()

router.post('/signin', signin)


module.exports = router