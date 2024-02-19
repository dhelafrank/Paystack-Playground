var express = require('express');
var router = express.Router();
const {homePage} = require('../controllers/views')

router.get('/', homePage);

module.exports = router;
