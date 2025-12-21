
"use client";
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '@/firebase/client-init';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';
import { Loader2 } from 'lucide-react';

type Mode = 'signin' | 'signup';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [mode, setMode] = useState<Mode>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [formDisabled, setFormDisabled] = useState(false);

    useEffect(() => {
        // Prefill email if it's in the query params
        const emailFromQuery = searchParams.get('email');
        if (emailFromQuery) {
            setEmail(emailFromQuery);
        }
    }, [searchParams]);

    const handleAuthAction = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormDisabled(true);
        setError(null);

        try {
            let user: User | null = null;
            if (mode === 'signup') {
                try {
                    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                    user = userCredential.user;
                } catch (e: any) {
                    console.error("SIGN UP FAILED - DETAILED ERROR:", JSON.stringify(e, null, 2));
                    throw e; // re-throw the error to be caught by the outer catch
                }
            } else {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                user = userCredential.user;
            }
            
            if (user) {
                const idToken = await user.getIdToken();
                const response = await fetch('/api/auth/session', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${idToken}`,
                    },
                });

                if (response.ok) {
                    router.push('/admin');
                } else {
                    const errorData = await response.json();
                    setError(errorData.error || 'Session creation failed.');
                }
            }
        } catch (err: any) {
            console.error("Authentication failed:", err);
            let errorMessage = err.message || 'An unknown error occurred.';
            // Try to make the error message more user-friendly
            if (err.code) {
                switch (err.code) {
                    case 'auth/user-not-found':
                    case 'auth/wrong-password':
                    case 'auth/invalid-credential':
                        errorMessage = 'Invalid email or password.';
                        break;
                    case 'auth/email-already-in-use':
                        errorMessage = 'An account with this email already exists.';
                        break;
                    default:
                        errorMessage = `Error: ${err.code}. See console for details.`;
                        break;
                }
            }
            setError(errorMessage);
        } finally {
            setFormDisabled(false);
        }
    };
    
    const pageTitle = mode === 'signin' ? "Admin Access" : "Create Account";
    const pageSubtitle = mode === 'signin' ? "Sign in to manage your application." : "The first user to sign up will be the admin.";

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold font-headline">{pageTitle}</h1>
                    <p className="text-muted-foreground">{pageSubtitle}</p>
                </div>
                {error && (
                    <Alert variant="destructive">
                        <Terminal className="h-4 w-4" />
                        <AlertTitle>Sign-in Failed</AlertTitle>
                        <AlertDescription>
                            {error}
                        </AlertDescription>
                    </Alert>
                )}
                <form onSubmit={handleAuthAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={formDisabled}
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
                    disabled={formDisabled}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={formDisabled}>
                  {formDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {mode === 'signin' ? 'Sign In' : 'Sign Up'}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                {mode === 'signin' ? (
                  <>
                    No account?{' '}
                    <Button variant="link" onClick={() => { setMode('signup'); setError(null); }}>
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <Button variant="link" onClick={() => { setMode('signin'); setError(null); }}>
                      Sign In
                    </Button>
                  </>
                )}
              </div>
            </div>
        </div>
    );
}
