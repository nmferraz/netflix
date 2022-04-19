import Head from 'next/head'

import Header from '../components/Header'

function Home() {
  return (
    <div className="relative h-screen gb-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Home | Netflix | By nmferraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {/* Banner */}
        <section>{/* Row */}</section>
      </main>
    </div>
  )
}

export default Home
