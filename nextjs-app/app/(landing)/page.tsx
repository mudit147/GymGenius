'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '../routes.const';

export default function Home() {
  return (
    <>
      <h1>Landing Page ...Unauth</h1>
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/registration">
          <Button>Register</Button>
        </Link>
      </div>
      <Link href={ROUTES.LOGIN}>Go to Login</Link>
      <br />
      <Link href={ROUTES.ABOUT}>Go to About</Link>
      <br />
      <Link href={ROUTES.REGISTRATION}>Register me</Link>
    </>
  );
}
