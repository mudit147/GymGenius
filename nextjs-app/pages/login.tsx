import { useContext, useState, useEffect } from 'react';
import { UserContext } from '@/lib/UserContext';
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';
import { ROUTES } from './pages.const';

export default function Login() {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    user?.issuer && router.push(ROUTES.DASHBOARD.INDEX);
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const didToken = await magic.auth.loginWithMagicLink({
        email,
      });

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${didToken}`,
        },
      });

      if (res.ok) {
        const userMetadata = await magic.user.getMetadata();
        setUser(userMetadata);
        router.push(ROUTES.DASHBOARD.INDEX);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
}
