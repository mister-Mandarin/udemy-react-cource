import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import React from "react";
import Head from "next/head";
//import {Head} from 'next/document';

export default function App({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>Приложение Udemy</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        </Head>
        <Component {...pageProps} />
    </>;
}
 