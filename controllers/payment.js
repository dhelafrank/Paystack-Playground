const generatePaymentInformation = require("../services/paymentProcessor");

async function pay(req, res, next) {
    const {customerDetails, productId} = req.body
    let paymentInfo = await generatePaymentInformation(customerDetails, productId)
    console.log(paymentInfo)
    res.send("green")
}

module.exports = {pay}