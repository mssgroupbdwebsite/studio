
import {NextRequest, NextResponse} from 'next/server';
import { getAdminServices } from '@/firebase/server-init';

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('session');

  // If there's no session cookie, just continue
  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const { auth } = getAdminServices();
    // Verify the session cookie. This checks for revocation.
    const decodedToken = await auth.verifySessionCookie(sessionCookie.value, true);

    // If verification is successful, check for admin claim
    if (decodedToken.admin !== true) {
      // Not an admin, redirect to login with an error
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('error', 'unauthorized');
      return NextResponse.redirect(loginUrl);
    }


    // If verification is successful, the user is authenticated.
    // We can add the user's info to the request headers for use in server components if needed.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('X-User-Info', JSON.stringify(decodedToken));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    // If the cookie is invalid (e.g., expired, revoked), clear it and redirect to login
    console.error('Session cookie verification failed:', error);
    
    // Redirect to login page and clear the invalid cookie
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.set('session', '', { maxAge: -1 }); // Expire the cookie
    return response;
  }
}

export const config = {
  // Match all paths under /admin
  matcher: ['/admin/:path*'],
};
