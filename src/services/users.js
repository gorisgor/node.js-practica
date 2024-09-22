import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { UserCollection } from '../db/models/User.js';

export const registerUser = async (payload) => {
  const findUserByEmail = await UserCollection.findOne({
    email: payload.email,
  });
  if (findUserByEmail) throw createHttpError(409, 'Email in use');
  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UserCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};
