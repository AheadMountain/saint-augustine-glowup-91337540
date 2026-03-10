import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';

export const wixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({ clientId: '3fc8c66c-c636-49ab-9b94-b9d4bde5c2e3' }),
});
