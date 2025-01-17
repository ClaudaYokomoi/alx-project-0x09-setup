import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Stay</h1>
        <p className="text-lg">Explore the best properties worldwide</p>
      </div>
    </section>
  );
};

export default Hero;
