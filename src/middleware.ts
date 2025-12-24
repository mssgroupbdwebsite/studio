
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Protect both /admin and /media routes with Basic Auth
  if (pathname.startsWith('/media') || pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      // The atob function is available in Edge runtime
      const [user, pwd] = atob(authValue).split(':');

      const validUser = process.env.BASIC_AUTH_USER;
      const validPass = process.env.BASIC_AUTH_PASSWORD;

      if (user === validUser && pwd === validPass) {
        return NextResponse.next();
      }
    }
    
    // If auth fails or is not present, request it
    url.pathname = '/api/auth/basic';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/media/:path*', '/admin/:path*'],
};
