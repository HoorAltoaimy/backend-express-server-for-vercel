const Product = require("../model/productSchema");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({
      message: "return all products",
      products,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
module.exports = { getAllProducts };
