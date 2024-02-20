const generatePaymentInformation = require("../services/paymentProcessor");

async function pay(req, res, next) {
    const {
        customerDetails,
        productId
    } = req.body
    let paymentInfo = await generatePaymentInformation(customerDetails, productId)
    res.status(200).json(paymentInfo)
}

module.exports = {
    pay
}