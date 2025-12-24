
import { NextRequest, NextResponse } from 'next/server';
import { getAdminServices } from './firebase/server-init';

async function verifySession(sessionCookie?: string) {
    if (!sessionCookie) {
        return null;
    }
    try {
        const { auth } = getAdminServices();
        const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
        return decodedClaims;
    } catch (error) {
        // Session cookie is invalid or expired.
        console.error('Error verifying session cookie:', error);
        return null;
    }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect media upload page with basic auth
  if (pathname.startsWith('/media')) {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.BASIC_AUTH_USER;
      const validPass = process.env.BASIC_AUTH_PASSWORD;

      if (user === validUser && pwd === validPass) {
        return NextResponse.next();
      }
    }
    
    url.pathname = '/api/auth/basic';
    return NextResponse.rewrite(url);
  }

  // Protect admin routes with session cookie
  if (pathname.startsWith('/admin')) {
    const sessionCookie = req.cookies.get('session')?.value;
    const decodedClaims = await verifySession(sessionCookie);

    if (!decodedClaims || !decodedClaims.admin) {
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/media/:path*', '/admin/:path*'],
};
