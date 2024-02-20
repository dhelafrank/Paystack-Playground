const Product = require('../models/products');
const productsData = require('../data/products.json');

async function resetDatabase() {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productsData);

    console.log('Database reset successful.');
  } catch (error) {
    console.error('Error resetting database:', error);
  }
}

module.exports = resetDatabase;
