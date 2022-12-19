import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('start middleware');
  const pathnames = req.nextUrl;

  if (!pathnames.pathname.indexOf('?page=')) {
    return NextResponse.redirect(new URL('/product/mouse', req.url));
  }
}

export const config = {
  matcher: '/product/mouse ',
};
