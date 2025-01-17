import type { NextPage } from 'next';
import Head from 'next/head';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { HERO_BACKGROUND_IMAGE } from '../constants';

const HeroSection = () => {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{
        backgroundImage: `url(${HERO_BACKGROUND_IMAGE})`, // Background image for hero section
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="An Airbnb clone listing page" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Property Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Luxury Apartment" description="2 bed, 1 bath, city view" />
          <Card title="Beachfront Villa" description="3 bed, 2 bath, ocean view" />
          <Card title="Cozy Cottage" description="1 bed, 1 bath, countryside view" />
        </div>
        <Button label="See All Listings" />
      </main>
    </>
  );
};

export default Home;
