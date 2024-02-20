const express = require('express')
const { addNewCustomer, updateCustomer } = require('../controllers/customer')
const router = express.Router()

router.post("/new", addNewCustomer)

module.exports = router