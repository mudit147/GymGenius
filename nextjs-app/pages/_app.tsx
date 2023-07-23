import { AppProvider } from '@/app/components/AppProvider';
import { AuthGuard } from '@/app/components/AuthGuard';
import '@/app/globals.css';
import { AppProps } from 'next/app';

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
