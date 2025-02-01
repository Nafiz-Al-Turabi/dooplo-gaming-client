import { generateToken } from '../lib/jwt';
import dbConnect from '../lib/dbConnect';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export const register = async (req) => {
  await dbConnect();

  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json(
        { message: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    // Generate token
    const token = generateToken(user._id);

    // Create cookie options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: '/',
    };

    // Create the cookies instance
    const cookieStore = cookies();
    cookieStore.set('token', token, cookieOptions);

    return Response.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    return Response.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
};

export const login = async (req) => {
  await dbConnect();

  try {
    const { email, password } = await req.json();

    // Basic validation
    if (!email || !password) {
      return Response.json({ message: 'Missing email or password' }, { status: 400 });
    }

    // Find user and include password field
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return Response.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Compare passwords
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return Response.json({ message: 'Invalid credentials' }, { status: 401 });
      }
    } catch (error) {
      console.error('Password comparison error:', error);
      return Response.json({ message: 'Authentication error' }, { status: 500 });
    }

    const token = generateToken(user._id);

    // Create cookie options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      path: '/',
    };

    // Create the cookies instance
    const cookieStore = cookies();
    cookieStore.set('token', token, cookieOptions);

    return Response.json({ 
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    }, { status: 200 });

  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ message: 'Server error', error: error.message }, { status: 500 });
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