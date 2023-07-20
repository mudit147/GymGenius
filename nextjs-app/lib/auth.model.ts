import { MagicUserMetadata } from '@magic-sdk/types';

export interface User extends MagicUserMetadata {
  email: string;
  publicAddress: string;
}
