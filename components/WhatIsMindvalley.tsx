import React from 'react';
import { featuresData } from '../assets/data';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg">
        <div className="mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
    </div>
);


const WhatIsMindvalley: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What is Growth Sphere?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Growth Sphere is your daily coach for life transformation. It's an online university for all the things school never taught you about life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsMindvalley;