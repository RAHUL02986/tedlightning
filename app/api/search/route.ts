import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/lib/models/Product';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const q = (searchParams.get('q') || '').trim();

    if (!q) {
      return NextResponse.json({ success: true, data: [] }, { status: 200 });
    }

    const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

    const products = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
        { subcategory: regex },
      ],
    }).limit(20).lean();

    const results = products.map((p) => ({
      id: p.id,
      title: p.name,
      url: `/products/${p.id}`,
      category: p.category,
      type: 'product',
    }));

    return NextResponse.json({ success: true, data: results }, { status: 200 });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ success: false, error: 'Search failed' }, { status: 500 });
  }
}
