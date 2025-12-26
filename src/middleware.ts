
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  if (path.startsWith('/admin') || path.startsWith('/media')) {
    const basicAuth = req.headers.get('authorization');
    const url = req.nextUrl;

    if (basicAuth) {
      try {
        const authValue = basicAuth.split(' ')[1];
        // The atob function is available in Edge runtime
        const [user, pwd] = atob(authValue).split(':');

        const validUser = process.env.BASIC_AUTH_USER;
        const validPass = process.env.BASIC_AUTH_PASSWORD;

        if (user === validUser && pwd === validPass) {
          return NextResponse.next();
        }
      } catch (e) {
        console.error('Error parsing basic auth header:', e);
      }
    }
    
    // If auth fails or is not present, request authentication
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/media/:path*'],
};
