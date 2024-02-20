var express = require('express');
var router = express.Router();
const {
    homePage
} = require('../controllers/views')

router.get('/', homePage);



router.get('/ping', (req, res, next) => {
res.send("Green!")
})


module.exports = router;