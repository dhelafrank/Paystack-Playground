const Product = require('../models/products');
const {
  Configs
} = require('../modules')

async function fetchAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}

async function fetchProductById(req, res) {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        error: 'Product not found'
      });
    }

    product.public_key = Configs.paystack.test.public

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error: 'Internal server error'
    });
  }
}

module.exports = {
  fetchAllProducts,
  fetchProductById
};