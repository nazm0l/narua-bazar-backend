import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../utils/jwt.util';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization as string | undefined;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    // attach to request (express types augmented in src/types/express.d.ts)
    req.user = { id: decoded.id, role: decoded.role };

    next();
  } catch (err: any) {
    return res.status(401).json({ message: 'Invalid or expired token', error: err.message });
  }
};

export default authMiddleware;
