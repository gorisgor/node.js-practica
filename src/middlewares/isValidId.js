import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

const isValidId = (req, res, next) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    return next(createHttpError(400, 'Invalid Id'));
  }
  next();
};

export default isValidId;
