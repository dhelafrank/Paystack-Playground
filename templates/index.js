const {
    Configs
} = require("../modules")
const Product = require('../models/products');
const productCards = require("./components/productsCardGenerator")

const homePageObject = async () => {
    return {
        title: Configs.projectName,
        contents: await htmlContent()
    }
}

async function htmlContent() {
    const products = await Product.find();
    return `
            <p class="center info">
            Welcome to ${Configs.projectName}! This project demonstrates the utilization of the Paystack API for making and verifying payments, with a frontend built using EJS and ExpressJS for the backend. MongoDB is used as the database to store relevant data.    
            </p>
            <div class="product-cards-container">
                ${await productCards(products)}
            </div>
            <br>
            <script type="module" src="/javascripts/products.js"></script>
            `
}

module.exports = {
    homePageObject
}