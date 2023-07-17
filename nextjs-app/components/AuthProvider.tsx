import React, { useEffect, useState } from 'react';
import { Auth } from '@/auth';

const auth = new Auth();

export const AuthContext = React.createContext<
  | {
      auth: Auth;
      initializing: boolean;
      user: any;
      error: { message: string };
    }
  | undefined
>(undefined);

AuthContext.displayName = 'AuthContext';

export function useAuth() {
  const auth = React.useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return auth;
}

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    auth.resolveUser(2000).onAuthStateChanged((user: any, error: any) => {
      if (user) {
        setUser(user);
        setError(null);
      } else {
        setUser(null);
        if (error) {
          setError(error);
        }
      }
      setInitializing(false);
    });
  }, []);

  const value = {
    user,
    error,
    auth,
    initializing,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
