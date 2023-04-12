import {Html, Head, Main, NextScript} from 'next/document';
import React from "react";

export default function Document(): JSX.Element {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}