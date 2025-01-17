import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/Hero';
import ListingSection from './components/ListingSection';

const App = () => {
  return (
    <Layout>
      <Hero />
      <ListingSection />
    </Layout>
  );
};

export default App;
