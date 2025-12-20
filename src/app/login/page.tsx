
'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Logo} from '@/components/layout/logo';
import {signInWithGoogle} from '@/lib/firebase/auth';
import {Loader2} from 'lucide-react';
import {createSession} from '@/app/api/auth/session/actions';

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M21.35 11.1H12.18v2.8h4.99c-.3 1.8-1.7 3.2-3.6 3.2-2.1 0-3.9-1.7-3.9-3.9s1.8-3.9 3.9-3.9c1 0 1.9.4 2.6 1.1l2.1-2.1C16.6 3.4 14.5 2.5 12 2.5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5-.1-.9-.2-1.3z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const [status, setStatus] = useState<'loading' | 'unauthenticated' | 'authenticating'>(
    'loading'
  );
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setStatus('authenticating');
        const result = await createSession();
        if (result.success) {
          router.push('/admin');
        } else {
          // Handle session creation failure
          console.error('Failed to create session');
          setStatus('unauthenticated');
        }
      } else {
        setStatus('unauthenticated');
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl">Admin Access</CardTitle>
          <CardDescription>Sign in to manage your application.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {status === 'unauthenticated' && (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setStatus('authenticating');
                  signInWithGoogle();
                }}
              >
                <GoogleIcon />
                Sign in with Google
              </Button>
            )}
            {status === 'loading' ||
              (status === 'authenticating' && (
                <div className="flex justify-center items-center p-4">
                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                  <p>Authenticating...</p>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
