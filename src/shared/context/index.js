import React from 'react';
import { AuthProvider } from './auth-context';
import { UIProvider } from './ui-context';

export * from './ui-context';
export * from './auth-context';

export function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UIProvider>{children}</UIProvider>
    </AuthProvider>
  );
}
