const express = require('express')
const { pay, verify } = require('../controllers/payment')
const router = express.Router()

router.post("/pay", pay)
router.post("/pay", verify)

module.exports = router