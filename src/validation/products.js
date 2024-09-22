import Joi from 'joi';
import { productsCategory } from '../constants/products.js';

export const productAddSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string()
    .required()
    .valid(...productsCategory),
  description: Joi.string(),
});

export const productPatchSchema = Joi.object({
  name: Joi.string(),
  price: Joi.number(),
  category: Joi.string().valid(...productsCategory),
  description: Joi.string(),
});
