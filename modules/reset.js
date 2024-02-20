const Product = require('../models/products');
const Customer = require('../models/customer');
const Payment = require('../models/payment');

const productsData = require('../data/products.json');

async function resetDatabase() {
  try {
    await Product.deleteMany({});
    await Customer.deleteMany({});
    await Payment.deleteMany({});

    await Product.insertMany(productsData);

    console.log('Database reset successful.');
  } catch (error) {
    console.error('Error resetting database:', error);
  }
}

module.exports = resetDatabase;
