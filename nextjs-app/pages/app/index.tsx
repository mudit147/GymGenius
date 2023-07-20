import { magic } from '@/lib/magic';
import { useRouter } from 'next/router';
import { ROUTES } from '@/pages/routes.const';
import { useApp } from '@/components/AppProvider';

export default function Dashboard() {
  const { auth, user } = useApp();
  const router = useRouter();

  const logout = async () => {
    await magic.user.logout();
    await auth.logout();
    router.push(ROUTES.LOGIN);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Email</h2>
      <p>{user.email}</p>
      <h2>Wallet Address</h2>
      <p>{user.publicAddress}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}

Dashboard.requireAuth = true;
