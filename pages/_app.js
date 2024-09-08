import React from 'react';
import Head from 'next/head';
import '../app/globals.css';

import 'typeface-inter';
import 'typeface-roboto';
import 'typeface-quicksand';

function App ({Component, pageProps}) {
    return(
        <>
            <Head><title>zuyux</title></Head>
            <Component {...pageProps}/>
        </> 
    )
}

export default App;