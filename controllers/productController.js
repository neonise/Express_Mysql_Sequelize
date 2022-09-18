const { Model } = require("sequelize");
const db = require("../models");

const Product = db.products;
const Review = db.reviews;

const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

const getAllProducts = async (req, res) => {
  let products = await Product.findAll();
  console.log("all");
  res.status(200).send(products);
};

const getOneProduct = async (req, res) => {
  console.log("all");
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.update(req.body, { where: { id } });
  res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id } });
  res.status(200).send("product deleted");
};

module.exports = {
  addProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  getOneProduct,
};
