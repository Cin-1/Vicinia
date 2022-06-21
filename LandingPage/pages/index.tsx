import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Sections from './components/Sections';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vicinia</title>
      </Head>
      <Header />
      <Sections />
      <Footer />
    </div>
  );
};

export default Home;
