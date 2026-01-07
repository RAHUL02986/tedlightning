import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Category from '../../../lib/models/Category';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const categories = await Category.find()
      .sort({ name: 1 })
      .lean()
      .exec();

    return NextResponse.json(
      { success: true, data: categories },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching categories:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
