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

export const updateProduct = async (id, payload) => {
  return await ProductsCollection.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
};
export const deleteProduct = async (productId) => {
  return await ProductsCollection.findOneAndDelete({ _id: productId });
};
