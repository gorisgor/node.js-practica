import { ProductsCollection } from '../db/models/Products.js';

export const getAllProducts = async () => {
  return await ProductsCollection.find();
};
