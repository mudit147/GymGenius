import { useAuth } from '@/components/AuthProvider';
import { ROUTES } from '@/pages/routes.const';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { user, initializing } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        if (router.pathname !== ROUTES.LOGIN) {
          router.push(ROUTES.LOGIN);
        }
      }
    }
  }, [initializing, router, user]);

  if (initializing) {
    return <p>Application Loading...</p>;
  }

  if ((!initializing && user) || router.pathname === ROUTES.LOGIN) {
    return <>{children}</>;
  }

  return null;
}
