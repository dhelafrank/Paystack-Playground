const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    transactionReference: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "completed", "failed", "abandoned", "processing","success"],
        required: true,
        default: "pending"
    },
    customerId: {
        type: String,
        ref: 'Customer',
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;