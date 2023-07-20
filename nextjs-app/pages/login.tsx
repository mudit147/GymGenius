import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/pages/routes.const';
import Link from 'next/link';
import { useApp } from '@/components/AppProvider';

export default function Login() {
  const { auth, user } = useApp();
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    user?.issuer && router.push(ROUTES.APP.INDEX);
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await auth.login(email);
  };

  return (
    <>
      <Link href="/">Return to home</Link>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Magic Link</button>
      </form>
    </>
  );
}

Login.requireAuth = true;
