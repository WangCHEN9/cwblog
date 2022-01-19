import Head from 'next/head';
import { AboutMe, Home } from '../PortfolioContainer';

export default function home() {
  return (
    <div className="">
      {/* <div className="container mx-auto px-10 mb-8"> */}
      <Head>
        <title>CHEN Wang</title>
        <link rel="icon" href="/coding.png" />
      </Head>

      <Home />
      <AboutMe />
    </div>
  );
}
