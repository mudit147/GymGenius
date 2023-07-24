import { User } from '@/app/lib/user.model';
import { Auth } from '@/auth';

export interface AppContextModel {
  initializing: boolean;
  auth: Auth;
  user: User;
  error: { message: string };
}
