import { Auth } from '@/auth';
import { User } from '@/lib/user.model';

export interface AppContextModel {
  initializing: boolean;
  auth: Auth;
  user: User;
  error: { message: string };
}
