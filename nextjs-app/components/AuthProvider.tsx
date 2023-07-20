import React, { useEffect, useState } from 'react';
import { Auth } from '@/auth';
import { User } from '@/lib/user.model';

const auth = new Auth();

export const AuthContext = React.createContext<
  | {
      initializing: boolean;
      auth: Auth;
      user: User;
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
    auth.resolveUser(2000).onAuthStateChanged((user: User, error: Error) => {
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
    initializing,
    user,
    error,
    auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
