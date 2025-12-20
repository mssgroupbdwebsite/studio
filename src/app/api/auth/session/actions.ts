
'use server';
import {getAuth} from 'firebase/auth';
import {cookies} from 'next/headers';

export async function createSession() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) {
    return {success: false, error: 'No user signed in.'};
  }

  const idToken = await user.getIdToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookies().toString(),
    },
    body: JSON.stringify({idToken}),
  });

  if (!res.ok) {
    return {success: false, error: 'Failed to create session.'};
  }

  const newCookies = res.headers.getSetCookie();
  if (newCookies) {
    newCookies.forEach(c => {
      const [name, ...valueParts] = c.split('=');
      const [value] = valueParts.join('=').split(';');
      cookies().set(name, value, {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24 * 5,
      });
    });
  }

  return {success: true};
}

export async function signOut() {
  await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/session`, {
    method: 'DELETE',
    headers: {
      Cookie: cookies().toString(),
    },
  });
  cookies().delete('session');
}
