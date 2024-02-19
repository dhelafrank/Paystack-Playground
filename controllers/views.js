const { Configs } = require("../modules")

async function homePage(req, res, next){
    res.render('index', { title: Configs.projectName })
}

module.exports = {homePage}