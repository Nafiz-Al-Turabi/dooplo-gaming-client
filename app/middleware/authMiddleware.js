import { verifyToken } from '../lib/jwt';
import { cookies } from 'next/headers';

export const authMiddleware = async (req) => {
  // Get token from cookies using next/headers
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    throw new Error('No token provided');
  }

  try {
    const decoded = verifyToken(token);
    return decoded.name;
  } catch (error) {
    throw new Error('Invalid token');
  }
};