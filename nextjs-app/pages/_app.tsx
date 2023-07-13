import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    setUser({ loading: true });

    magic.user.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
        router.push('/dashboard');
      } else {
        router.push('/login');
        setUser({ user: null });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
