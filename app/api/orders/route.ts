import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Order from '../../../lib/models/Order';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const orders = await Order.find({}).sort({ createdAt: -1 }).limit(10);
    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error('❌ Get orders API Error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
