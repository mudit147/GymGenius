import React, { useEffect, useState } from 'react';
import { Auth } from '@/auth';
import { User } from '@/lib/user.model';

const auth = new Auth();

export const AppContext = React.createContext<
  | {
      initializing: boolean;
      auth: Auth;
      user: User;
      error: { message: string };
    }
  | undefined
>(undefined);

AppContext.displayName = 'AppContext';

export function useApp() {
  const app = React.useContext(AppContext);

  if (!app) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return app;
}

export function AppProvider({ children }: { children: JSX.Element }) {
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

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
