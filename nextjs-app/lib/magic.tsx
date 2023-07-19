import { Magic } from 'magic-sdk';
import { SDKBase, InstanceWithExtensions, MagicSDKExtensionsOption } from '@magic-sdk/provider';
const createMagic = (key: string) => {
  // We make sure that the window object is available
  // Then we create a new instance of Magic using a publishable key
  return typeof window !== 'undefined' && new Magic(key);
};

// Pass in your publishable key from your .env file
export const magic = createMagic('pk_live_590AC8AEAE67856E') as InstanceWithExtensions<SDKBase, MagicSDKExtensionsOption<string>>;
