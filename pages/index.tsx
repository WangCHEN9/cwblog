import Head from 'next/head';
import { PortfolioContainer } from '../PortfolioContainer';

export default function home() {
  return (
    <div className="">
      {/* <div className="container mx-auto px-10 mb-8"> */}
      <Head>
        <title>Wang CHEN</title>
        <link rel="icon" href="/coding.png" />
      </Head>
      <PortfolioContainer />
    </div>
  );
}
