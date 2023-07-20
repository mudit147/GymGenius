import React, { useEffect, useState } from 'react';
import { Auth } from '@/auth';
import { User } from '@/lib/user.model';
import { AppContextModel } from '@/lib/app.model';

const auth = new Auth();

export const AppContext = React.createContext<AppContextModel | undefined>(
  undefined,
);

AppContext.displayName = 'AppContext';

export function useApp() {
  const app = React.useContext(AppContext);

  if (!app) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return app;
}

export function AppProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [error, setError] = useState<{ message: string } | undefined>(
    undefined,
  );
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    auth.resolveUser(2000).onAuthStateChanged((user: User, error: Error) => {
      if (user) {
        setUser(user);
        setError(undefined);
      } else {
        setUser(undefined);
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

  return (
    <AppContext.Provider value={value as AppContextModel}>
      {children}
    </AppContext.Provider>
  );
}
