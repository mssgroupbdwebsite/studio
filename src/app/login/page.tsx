
'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Logo} from '@/components/layout/logo';
import {signInWithEmailAndPassword} from '@/firebase';
import {Loader2} from 'lucide-react';
import {createAccount, createSession} from '@/app/api/auth/session/actions';
import {useToast} from '@/hooks/use-toast';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const router = useRouter();
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const userCredential = await signInWithEmailAndPassword(email, password);
      const idToken = await userCredential.user.getIdToken();
      const result = await createSession(idToken);
      
      if (result.success) {
        // The middleware will handle the redirection to /admin
        // We can push to a "success" page or just refresh to let middleware kick in.
        router.push('/admin');
      } else {
        // This case was not handled properly before.
        throw new Error(result.error || 'Failed to create session.');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Sign-in Failed",
        description: (error as Error).message,
      });
    } finally {
        // This ensures the button is re-enabled on failure.
        setIsSubmitting(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const result = await createAccount(email, password);
      if (result.success) {
        toast({
          title: "Account Created!",
          description: "Please sign in with your new credentials.",
        });
        setMode('signin');
      } else {
        throw new Error(result.error || 'Failed to create account.');
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Sign-up Failed",
        description: (error as Error).message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-2xl">{mode === 'signin' ? 'Admin Access' : 'Create Account'}</CardTitle>
          <CardDescription>
            {mode === 'signin'
              ? 'Sign in to manage your application.'
              : 'The first user to sign up will be the admin.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={mode === 'signin' ? handleSignIn : handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mode === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {mode === 'signin' ? (
              <>
                No account?{' '}
                <Button variant="link" className="p-0" onClick={() => setMode('signup')}>
                  Sign up
                </Button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Button variant="link" className="p-0" onClick={() => setMode('signin')}>
                  Sign in
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
