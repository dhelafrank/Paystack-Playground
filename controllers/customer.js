const Customer = require('../models/customer')
const {
    v4: uuidv4
} = require('uuid');
const uuid = uuidv4();



async function addNewCustomer(req, res, next) {
    try {
        let customerDetailsReceived = req.body
        let customerDetails = await newCustomer(customerDetailsReceived)
        res.status(200).json({
            staus: true,
            message: "Customer Details Saved",
            data: customerDetails
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: true,
            message: "internal server error",
            data: []
        })
    }
}

async function newCustomer(customerDetailsReceived){
    let detailsAddon = {
        _id: `csm_${uuid}`,
        transactions: []
    }
    let customerDetailsCompiled = {
        ...customerDetailsReceived,
        ...detailsAddon
    }
    customerDetails = new Customer(customerDetailsCompiled)
    await customerDetails.save()
    return customerDetails
}

async function updateCustomer(){}

module.exports = {
    addNewCustomer,
    updateCustomer,
    newCustomer
}