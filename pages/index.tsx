import Head from 'next/head';
import { Profile } from '../PortfolioContainer';

export default function Home() {
  return (
    <div className=" mb-8">
      {/* <div className="container mx-auto px-10 mb-8"> */}
      <Head>
        <title>CHEN Wang</title>
        <link rel="icon" href="/coding.png" />
      </Head>

      <Profile />
    </div>
  );
}
