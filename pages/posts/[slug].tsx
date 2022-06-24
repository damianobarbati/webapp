import { ParsedUrlQuery } from 'querystring';
import type { NextPage, GetServerSideProps } from 'next';

import Head from 'next/head';

type Props = {
  slug: String;
};

const Post: NextPage<Props> = ({ slug }) => {
  return (
    <div>
      <Head>
        <title>{slug}</title>
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">{slug}</h1>
      </main>
    </div>
  );
};

export default Post;

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
  const { slug } = context.params!;

  return {
    props: { slug }, // will be passed to the page component as props
  };
};
