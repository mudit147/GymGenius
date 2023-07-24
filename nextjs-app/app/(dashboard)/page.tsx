'use client';

import { ROUTES } from '@/pages/routes.const';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={ROUTES.LOGIN}>Go to Login</Link>
      <br />
      <Link href={ROUTES.ABOUT}>Go to About</Link>
      <br />
      <Link href={ROUTES.REGISTRATION}>Register me</Link>
    </>
  );
}
