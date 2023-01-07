import "~/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next/types";

import { ChakraProvider } from "@chakra-ui/react";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import theme from "../config/theme";
import { AuthProvider } from "../providers/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <AuthProvider>
      {/* <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      > */}
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      {/* </SessionContextProvider> */}
    </AuthProvider>
  );
}
