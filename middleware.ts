import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // if (
  //   process.env.NODE_ENV === 'development' ||
  //   process.env.NODE_ENV === 'test'
  // ) {
  //   return NextResponse.next();
  // }

  const jwt = request.cookies.get('app-token');

  if (!jwt) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
  // try {
  //   await jwtVerify(
  //     jwt.value,
  //     new TextEncoder().encode(process.env.SECRET_JWT)
  //   );
  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect(new URL('/auth/login', request.url));
  // }
}

export const config = {
  matcher: '/dashboard/:path*',
};
