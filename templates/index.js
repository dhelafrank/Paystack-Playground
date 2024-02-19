const { Configs } = require("../modules")

const homePageObject = async () => {
    return {
        title: Configs.projectName,
        contents: htmlContent()
    }
}

function htmlContent() {
    return `<p class="center">
            Welcome to ${Configs.projectName}! This project demonstrates the utilization of the Paystack API for making and verifying payments, with a frontend built using EJS and ExpressJS for the backend. MongoDB is used as the database to store relevant data.    
            </p>
            <br>
            `
}

module.exports = {
    homePageObject
}