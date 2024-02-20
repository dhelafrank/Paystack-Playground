const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    transactions: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
        default: []
    }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
