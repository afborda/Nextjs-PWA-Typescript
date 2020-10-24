// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> React Avançado - Abner Fonseca</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="Um projeto simples de Next.JS e Typescript and styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
