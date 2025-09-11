import React from 'react';
import { restaurantInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            {restaurantInfo.tagline}
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            {restaurantInfo.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;