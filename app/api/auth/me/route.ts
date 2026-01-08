import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../lib/models/User';
import { authenticateRequest } from '../../../../lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // Authenticate request
    const authError = await authenticateRequest(request as any);
    if (authError) return authError;

    const user = (request as any).user;
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Get full user data from database
    const dbUser = await User.findById(user.id).select('-password');
    if (!dbUser) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          user: {
            id: dbUser._id,
            email: dbUser.email,
            role: dbUser.role,
          },
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get user' },
      { status: 500 }
    );
  }
}
