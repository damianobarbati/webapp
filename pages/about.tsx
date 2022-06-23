import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Webapp</title>
        <meta name="description" content="Webapp starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">About</h1>

        <button className="btn btn-blue">Click me</button>
      </main>
    </div>
  );
};

export default About;
