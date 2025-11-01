import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Career from '@/lib/models/Career';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const category = searchParams.get('category');

    const query: Record<string, unknown> = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { requiredSkills: { $in: [new RegExp(search, 'i')] } },
      ];
    }

    if (category && category !== 'All') {
      query.category = category;
    }

    const careers = await Career.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ careers }, { status: 200 });
  } catch (error) {
    console.error('Error fetching careers:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const careerData = await request.json();

    const career = await Career.create(careerData);

    return NextResponse.json(
      { message: 'Career created successfully', career },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating career:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
