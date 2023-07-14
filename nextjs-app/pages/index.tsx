import Link from 'next/link';
import { ROUTES } from '@/pages/pages.const';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={ROUTES.LOGIN}>Go to Login</Link>
      <br />
      <Link href={ROUTES.ABOUT}>Go to About</Link>
    </>
  );
}
