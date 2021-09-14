import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import "../styles/globals.css";
import "@fontsource/poppins";
import customTheme from "../styles/customTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Goat Club</title>
        <meta name="description" content="Goat Club NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Header />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
