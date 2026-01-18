import createHttpError from 'http-errors';
import { Product } from '../models/product.js';

export const getProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

export const getProductById = async (req, res, next) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  if (!product) {
    next(createHttpError(404, 'Product not found'));
    return;
  }
  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json(product);
};

export const updateProduct = async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
  });

  if (!product) {
    next(createHttpError(404, 'Product note found'));
    return;
  }

  res.status(200).json(product);
};

export const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;

  const product = await Product.findOneAndDelete(productId);

  if (!product) {
    next(createHttpError(404, 'Product not found'));
  }
  res.status(200).json(product);
};
