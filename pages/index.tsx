import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Webapp</title>
        <meta name="description" content="Webapp starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="paper">
        <h1>Yay!</h1>
        <button className="btn-blue">CIAO</button>

        <Link href="/about">
          <h2>About</h2>
        </Link>
      </main>
    </div>
  );
};

export default Home;
