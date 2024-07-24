
import '/public/css/globals.css'
import '/public/css/embla.css'
import '/public/css/stars.css'
import React from 'react';
import { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import Router from "next/router";
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({ subsets: ["latin"] });

function MyApp({ Component, pageProps, router }: AppProps) {
  return  (
    <>
      <Script
        id="source"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-QNX88EFC3T`}
      />

      <Script 
        id="code"
        strategy="lazyOnload"
      >
        {`  
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QNX88EFC3T');
         `}
      </Script>
      
      <Head>
        <title>Skyrim Perk Calculator</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Elder Scrolls V: Skyrim Perk Calculator / Builder, to assist with planning out your character." />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;