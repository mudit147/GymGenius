import { magic } from '@/app/lib/magic';
import { User } from '@/app/lib/user.model';

type Error = {
  message: string;
};

export class Auth {
  user?: User;
  error?: Error;
  cb?: any = undefined;

  onAuthStateChanged(cb: any) {
    this.cb = cb;
    return () => {
      this.cb = undefined;
    };
  }

  protected onUserChange(user?: User, error?: { message: string }) {
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
            const userMetadata = await magic.user.getInfo();
            this.user = userMetadata as any;
            this.onUserChange(this.user);
          }
          resolve(this.user);
        } catch (error) {
          this.error = { message: 'Wrong email or password' };
          this.onUserChange(undefined, this.error);
          reject(error);
        }

        resolve(this.user);
      });
    });
  }

  logout() {
    this.user = undefined;
    this.onUserChange(undefined);
  }

  resolveUser(timeout: number) {
    setTimeout(async () => {
      if (window) {
        const signedInUser = await magic.user.isLoggedIn();
        if (signedInUser) {
          this.user = (await magic.user.getInfo()) as any;
        }
      } else {
        this.user = undefined;
      }
      this.onUserChange(this.user);
    }, timeout);

    return this;
  }
}
