const {
    Configs
} = require("../modules")
const {
    v4: uuidv4
} = require("uuid")
const Product = require("../models/products")
const Payment = require("../models/payment")
const {
    newCustomer
} = require("../controllers/customer");

async function generatePaymentInformation(customerDetailsGotten, productId) {
    const customerDetails = await newCustomer(customerDetailsGotten)
    const product = await Product.findById(productId);

    paymentInfo = {
        key: paystackKeyFetch().public,
        email: customerDetails.email,
        amount: product.price * 100,
        currency: product.currencyCode,
        ref: `trx_${uuidv4()}`,
        label: `${customerDetails.firstName} ${customerDetails.lastName}`
    }

    registerPayment(paymentInfo, customerDetails)
    return paymentInfo
}

function paystackKeyFetch() {
    if (Configs.paymentMode == "live") {
        return Configs.paystack.live
    }
    return Configs.paystack.test
}

async function registerPayment(paymentInfo, customerDetails) {
    const paymentDetailsCompiled = {
        _id: Date.now(),
        transactionReference: paymentInfo.ref,
        paymentStatus: "pending",
        customerId: customerDetails._id
    }
    const paymentDetails = new Payment(paymentDetailsCompiled)
    await paymentDetails.save()
}

module.exports = {generatePaymentInformation, paystackKeyFetch}