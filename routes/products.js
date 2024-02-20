const express = require('express')
const { fetchProductById } = require('../controllers/products')
var router = express.Router()

router.get('/:id', fetchProductById)

module.exports = router