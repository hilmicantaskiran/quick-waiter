import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>Quick Waiter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
