import jwt from 'jsonwebtoken';
import config from '../config/index';

export interface JwtPayloadCustom {
  id: string;
  role?: string;
}

export const signToken = (payload: JwtPayloadCustom) => {
  const token = jwt.sign(payload, config.jwtSecret as string, {
    expiresIn: config.jwtExpiresIn,
  });

  return token;
};

export const verifyToken = (token: string): JwtPayloadCustom => {
  const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayloadCustom;
  return decoded;
};

export default {
  signToken,
  verifyToken,
};
