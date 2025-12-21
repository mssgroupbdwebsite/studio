
import {NextRequest, NextResponse} from 'next/server';
import { getAdminServices } from '@/firebase/server-init';


export async function POST(request: NextRequest) {
  const { auth } = getAdminServices();
  
  // Get the ID token from the Authorization header
  const authorization = request.headers.get('Authorization');
  let idToken: string | undefined;

  if (authorization?.startsWith('Bearer ')) {
      idToken = authorization.split('Bearer ')[1];
  }

  if (!idToken) {
    return NextResponse.json({error: 'No ID token provided.'}, {status: 400});
  }

  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn});
    const options = {
      name: 'session',
      value: sessionCookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true, // Set to true if using https
    };
    const response = NextResponse.json({status: 'success'}, {status: 200});
    response.cookies.set(options);
    return response;
  } catch (error: any) {
    console.error(
        'Error creating session cookie:',
        {
            code: error.code,
            message: error.message,
            stack: error.stack,
        }
    );
    return NextResponse.json({error: 'Failed to create session. See server logs for details.'}, {status: 401});
  }
}

export async function DELETE(request: NextRequest) {
  const { auth } = getAdminServices();
  const response = NextResponse.json({status: 'success'}, {status: 200});
  const sessionCookieName = 'session';
  const cookie = request.cookies.get(sessionCookieName);

  if (cookie) {
    try {
      const decodedClaims = await auth.verifySessionCookie(cookie.value, true);
      await auth.revokeRefreshTokens(decodedClaims.sub);
    } catch(error) {
      console.error("Error revoking refresh tokens:", error);
    }
  }

  response.cookies.set({
    name: sessionCookieName,
    value: '',
    expires: new Date(0),
  });

  return response;
}
