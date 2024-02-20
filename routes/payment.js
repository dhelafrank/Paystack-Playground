const express = require('express')
const { pay, verify } = require('../controllers/payment')
const router = express.Router()

router.post("/pay", pay)
router.post("/verify", verify)

module.exports = router