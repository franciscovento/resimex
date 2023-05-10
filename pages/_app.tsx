import { AuthProvider } from '@/context/AuthContext';
import '@/styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, never>> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </ThemeProvider>
  );
}
