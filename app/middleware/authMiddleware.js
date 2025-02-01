import { verifyToken } from '../lib/jwt';

export const authMiddleware = async (req) => {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = verifyToken(token);
    return decoded.userId;
  } catch (error) {
    throw new Error('Invalid token');
  }
};