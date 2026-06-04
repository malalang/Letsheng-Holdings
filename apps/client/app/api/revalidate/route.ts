import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret');

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  const { path, tag } = await request.json();

  if (path) {
    revalidatePath(path, 'layout');
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }

  if (tag) {
    revalidateTag(tag, 'max');
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  }

  return NextResponse.json({ message: 'Missing path or tag' }, { status: 400 });
}
