const { Configs } = require("../modules")
const productCards = require("./components/productsCardGenerator")
const {readFileSync} = require("fs")
const path = require('path')
const products =  JSON.parse(readFileSync(path.join(__dirname, "../data", "products.json")))

const homePageObject = async () => {
    return {
        title: Configs.projectName,
        contents: await htmlContent()
    }
}

async function htmlContent() {
    return `<p class="center info">
            Welcome to ${Configs.projectName}! This project demonstrates the utilization of the Paystack API for making and verifying payments, with a frontend built using EJS and ExpressJS for the backend. MongoDB is used as the database to store relevant data.    
            </p>
            <div class="product-cards-container">
                ${await productCards(products)}
            </div>
            <br>
            `
}

module.exports = {
    homePageObject
}