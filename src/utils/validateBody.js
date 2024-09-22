import createHttpError from 'http-errors';

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, {
        abortEarly: false,
      });
      next();
    } catch (error) {
      const validateerror = createHttpError(400, 'Bad request', {
        errors: error.details,
      });
      next(validateerror);
    }
  };
  return func;
};

export default validateBody;
