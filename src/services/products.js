import { ProductsCollection } from '../db/models/Products.js';

export const getAllProducts = async () => {
  return await ProductsCollection.find();
};
export const getProductById = async (productId) => {
  return await ProductsCollection.findById(productId);
};
export const createProduct = async (payload) => {
  return await ProductsCollection.create(payload);
};
