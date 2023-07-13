import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState();
  // Create our router
  const router = useRouter();

  useEffect(() => {
    // Set loading to true to display our loading message within pages/index.js
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
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
