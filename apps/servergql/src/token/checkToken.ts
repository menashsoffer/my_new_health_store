import jwt from 'jsonwebtoken';
const jwtS = process.env.JWT_SECRET;

export const checkToken = (token: string) => {
  const verify = jwt.verify(token, jwtS);
  return verify;
};
