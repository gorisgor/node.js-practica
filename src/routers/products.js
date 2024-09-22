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

router.get('/', ctrlWrapper(getAllProductsController));
router.get('/:productId', isValidId, ctrlWrapper(getProductByIdController));
router.post(
  '/',
  validateBody(productAddSchema),
  ctrlWrapper(postProductController),
);
router.patch(
  '/:productId',
  isValidId,
  validateBody(productPatchSchema),
  ctrlWrapper(updateProductController),
);
router.delete('/:productId', isValidId, ctrlWrapper(deleteProductController));

export default router;
