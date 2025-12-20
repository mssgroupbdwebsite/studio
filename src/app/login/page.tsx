
'use client';

import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Logo} from '@/components/layout/logo';
import { signInWithGoogle, useUser } from '@/firebase';
import {Loader2} from 'lucide-react';
import {createSession} from '@/app/api/auth/session/actions';
import { useToast } from '@/hooks/use-toast';

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
  const { user, isUserLoading } = useUser();
  const [status, setStatus] = useState<'loading' | 'unauthenticated' | 'authenticating'>('loading');
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (isUserLoading) {
      setStatus('loading');
      return;
    }
  
    if (user) {
      setStatus('authenticating');
      user.getIdToken().then(async (idToken) => {
        const result = await createSession(idToken);
        if (result.success) {
          router.push('/admin');
        } else {
          console.error('Failed to create session:', result.error);
          toast({
            variant: 'destructive',
            title: 'Authentication Error',
            description: result.error,
          });
          setStatus('unauthenticated');
        }
      });
    } else {
      setStatus('unauthenticated');
    }
  }, [user, isUserLoading, router, toast]);

  const handleSignIn = async () => {
    setStatus('authenticating');
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
      toast({
        variant: "destructive",
        title: "Sign-in Failed",
        description: (error as Error).message,
      })
      setStatus('unauthenticated');
    }
  };

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
                onClick={handleSignIn}
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
