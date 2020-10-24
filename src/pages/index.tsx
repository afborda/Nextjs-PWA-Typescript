import Head from 'next/head'

type props = {
  title: string
}

export default function Home({ title = 'Abner Fonseca' }: props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{title}</h1>
    </div>
  )
}
