import * as jwt from 'jsonwebtoken';
import config from '../config/index';

export interface JwtPayloadCustom {
  id: string;
  role?: string;
}

export const signToken = (payload: JwtPayloadCustom) => {
  const secret = config.jwtSecret as unknown as jwt.Secret;
  const token = jwt.sign(payload as jwt.JwtPayload, secret, {
    expiresIn: config.jwtExpiresIn as jwt.SignOptions['expiresIn'],
  });

  return token as string;
};

export const verifyToken = (token: string): JwtPayloadCustom => {
  const secret = config.jwtSecret as unknown as jwt.Secret;
  const decoded = jwt.verify(token, secret) as JwtPayloadCustom;
  return decoded;
};

export default {
  signToken,
  verifyToken,
};
