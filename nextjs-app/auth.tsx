import { magic } from '@/lib/magic';

export class Auth {
  user: any;

  error: { message: string } | null;

  cb: any;

  constructor() {
    this.user = null;
    this.error = null;
  }

  onAuthStateChanged(cb: any) {
    this.cb = cb;

    return () => {
      this.cb = null;
    };
  }

  protected onUserChange(user: any | null, error?: { message: string }) {
    this.cb && this.cb(user, error);
  }

  login(email: string) {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const token = await magic.auth.loginWithMagicLink({
            email,
          });
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          });

          if (res.ok) {
            const userMetadata = await magic.user.getMetadata();
            this.user = userMetadata;

            this.onUserChange(this.user);
          }
          resolve(this.user);
        } catch (error) {
          this.error = { message: 'Wrong email or password' };
          this.onUserChange(null, this.error);
          reject(error);
        }

        resolve(this.user);
      });
    });
  }

  logout() {
    this.user = null;
    this.onUserChange(this.user);
  }

  resolveUser(timeout: number) {
    setTimeout(async () => {
      if (window) {
        const signedInUser = await magic.user.isLoggedIn();
        if (signedInUser) {
          this.user = await magic.user.getMetadata();
        }
      } else {
        this.user = null;
      }
      this.onUserChange(this.user);
    }, timeout);

    return this;
  }
}
