import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';
import { ROUTES } from './pages.const';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    setUser({ loading: true });

    magic.user.isLoggedIn().then((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        magic.user.getMetadata().then((userData) => setUser(userData));
        router.push(ROUTES.APP.INDEX);
      } else {
        setUser({ loading: false });
        router.push(ROUTES.LOGIN);
      }
    });
  }, []);

  if (!user || user?.loading) {
    return <p>Loading...</p>;
  }

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
