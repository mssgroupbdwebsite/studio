
import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');
  const {pathname} = request.nextUrl;

  // If user is trying to access admin pages without a session, redirect to login
  if (pathname.startsWith('/admin') && !sessionCookie) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If user is on login page but already has a session, redirect to admin
  if (pathname === '/login' && sessionCookie) {
    const adminUrl = new URL('/admin', request.url);
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
