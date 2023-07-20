import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { AppProvider } from '@/components/AppProvider';
import { AuthGuard } from '@/components/AuthGuard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      {(Component as any).requireAuth ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </AppProvider>
  );
}
