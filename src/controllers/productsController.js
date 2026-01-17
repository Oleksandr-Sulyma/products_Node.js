import { Product } from '../models/product.js';

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

export const getProductById = async (req, res) => {
    const {productId} = req.params;
    const product = await Product.findById(productId);

    if (!product) {
        return res.status(404).json({message : "Product not found"})
    };
    res.status(200).json(product);
};
