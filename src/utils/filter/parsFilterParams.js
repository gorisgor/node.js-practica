import { productsCategory } from '../../constants/products.js';

const parseCategory = (category) => {
  const isString = typeof category === 'string';
  if (!isString) return;

  const isCategory = (category) => productsCategory.includes(category);

  if (isCategory(category)) return category;
};

const parseNumber = (number) => {
  const isString = typeof number === 'string';
  if (!isString) return;

  const parseNumber = parseInt(number);
  if (Number.isNaN(parseNumber)) return;

  return parseNumber;
};

const parsFilterParams = (query) => {
  const { category, minPrice, maxPrice } = query;

  const parsedCategory = parseCategory(category);
  const parsedMinPrice = parseNumber(minPrice);
  const parsedMaxPrice = parseNumber(maxPrice);

  return {
    category: parsedCategory,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
  };
};

export default parsFilterParams;
