import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { AuthProvider } from '@/components/AuthProvider';
import { AuthGuard } from '@/components/AuthGuard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      {Component.requireAuth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}
