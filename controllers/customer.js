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

async function newCustomer(customerDetailsReceived) {
    async function checkCustomerExistence() {
        let customer = await Customer.find({
            email: customerDetailsReceived.email
        })
        return customer
    }
    let customerExistence = await checkCustomerExistence()
    if (customerExistence.length > 0) {
        return customerExistence[0]
    }

    let detailsAddon = {
        _id: `csm_${uuid}`,
    }
    let customerDetailsCompiled = {
        ...customerDetailsReceived,
        ...detailsAddon
    }
    customerDetails = new Customer(customerDetailsCompiled)
    await customerDetails.save()
    return customerDetails
}

async function updateCustomer() {}

module.exports = {
    addNewCustomer,
    updateCustomer,
    newCustomer
}