import { Router } from 'express';
import {
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  postProductController,
  updateProductController,
} from '../controllers/products.js';
import validateBody from '../utils/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  productAddSchema,
  productPatchSchema,
} from '../validation/products.js';
import isValidId from '../middlewares/isValidId.js';

const router = Router();

router.get('/products', ctrlWrapper(getAllProductsController));
router.get(
  '/products/:productId',
  isValidId,
  ctrlWrapper(getProductByIdController),
);
router.post(
  '/products',
  validateBody(productAddSchema),
  ctrlWrapper(postProductController),
);
router.patch(
  '/products/:productId',
  isValidId,
  validateBody(productPatchSchema),
  ctrlWrapper(updateProductController),
);
router.delete(
  '/products/:productId',
  isValidId,
  ctrlWrapper(deleteProductController),
);

export default router;
