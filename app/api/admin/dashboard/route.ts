import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongodb';
import User from '../../../../lib/models/User';
import Order from '../../../../lib/models/Order';
import Product from '../../../../lib/models/Product';
import { authenticateRequest } from '../../../../lib/auth';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    // Authenticate request and check admin role
    const authError = await authenticateRequest(request as any);
    if (authError) return authError;

    const user = (request as any).user;
    if (user.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Admin access required' },
        { status: 403 }
      );
    }

    // Get dashboard statistics
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();

    // Calculate total revenue
    const orders = await Order.find({});
    const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);

    // Get recent orders
    const recentOrders = await Order.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .select('customerEmail total status createdAt');

    return NextResponse.json(
      {
        success: true,
        data: {
          totalUsers,
          totalOrders,
          totalRevenue,
          totalProducts,
          recentOrders,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Dashboard error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
