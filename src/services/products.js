import { ProductsCollection } from '../db/models/Products.js';

export const getAllProducts = async (filter = {}) => {
  const productQwery = ProductsCollection.find();

  if (filter.category) {
    productQwery.where('category').equals(filter.category);
  }

  if (filter.minPrice) productQwery.where('price').gte(filter.minPrice);

  if (filter.maxPrice) productQwery.where('price').lte(filter.maxPrice);

  return await productQwery;
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
