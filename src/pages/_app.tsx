import "~/styles/globals.css";

import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next/types";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "../config/theme";
import { AuthProvider } from "../providers/AuthContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return getLayout(
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}
