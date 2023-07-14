import { useContext } from 'react';
import { UserContext } from '@/lib/UserContext';
import { magic } from '@/lib/magic';
import { useRouter } from 'next/router';
import { ROUTES } from '@/pages/pages.const';

export default function Dashboard() {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      router.push(ROUTES.LOGIN);
    });
  };

  return (
    <>
      <div>{user?.loading && <p>Loading...</p>}</div>
      {user?.issuer && (
        <>
          <h1>Dashboard</h1>
          <h2>Email</h2>
          <p>{user.email}</p>
          <h2>Wallet Address</h2>
          <p>{user.publicAddress}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
}
