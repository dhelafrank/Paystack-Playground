const {
    generatePaymentInformation,
    paystackKeyFetch
} = require("../services/paymentProcessor");
const axios = require('axios')

async function pay(req, res, next) {
    const {
        customerDetails,
        productId
    } = req.body
    let paymentInfo = await generatePaymentInformation(customerDetails, productId)
    res.status(200).json(paymentInfo)
}

async function verify(req, res, next) {
    const {
        ref
    } = req.body
    await verificationRequest(ref)
    res.send({
        status: true
    })
}



async function verificationRequest(ref) {
    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: `/transaction/verify/${ref}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${paystackKeyFetch().private}`
        }
    };

    try {
        const response = await axios(options)
        console.log('Response:', response.data);
        //Make Database Based Decsions Here
    } catch (error) {
        console.error('Error:', error.response.data);
    }
}
module.exports = {
    pay,
    verify
}