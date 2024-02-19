const { Configs } = require("../modules")
const { homePageObject } = require("../templates")

async function homePage(req, res, next){
    res.render('index', await homePageObject())
}

module.exports = {homePage}