import User from '../models/User';
import { generateToken } from '../lib/jwt';
import dbConnect from '../lib/dbConnect';

export const register = async (req) => {
  await dbConnect();

  const { name, email, password } = await req.json();

  try {
    const user = new User({ name, email, password });
    await user.save();
    const token = generateToken(user._id);
    return Response.json({ token }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'User already exists' }, { status: 400 });
  }
};

export const login = async (req) => {
  await dbConnect();

  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return Response.json({ message: 'Invalid credentials' }, { status: 401 });
    }
    const token = generateToken(user._id);
    return Response.json({ token }, { status: 200 });
  } catch (error) {
    return Response.json({ message: 'Server error' }, { status: 500 });
  }
};

export const getProfile = async (req) => {
  await dbConnect();

  try {
    const userId = await authMiddleware(req);
    const user = await User.findById(userId).select('-password');
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 401 });
  }
};