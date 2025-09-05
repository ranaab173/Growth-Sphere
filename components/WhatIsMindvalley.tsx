import React, { useState } from 'react';
import { featuresData } from '../assets/data';
import type { Feature } from '../types';

interface FeatureCardProps {
    feature: Feature;
    isSelected: boolean;
    onSelect: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isSelected, onSelect }) => (
    <button 
        onClick={onSelect}
        className={`bg-white p-8 rounded-lg border text-left transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400 ${isSelected ? 'border-sky-400 ring-2 ring-sky-400' : 'border-gray-200 hover:border-sky-300'}`}
    >
        <div className="mb-4">{feature.icon}</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
    </button>
);


const WhatIsGrowthSphere: React.FC = () => {
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(featuresData[0]);

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">What is Growth Sphere?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Growth Sphere is your daily coach for life transformation. It's an online university for all the things school never taught you about life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
                <FeatureCard 
                    key={index} 
                    feature={feature}
                    isSelected={selectedFeature?.title === feature.title}
                    onSelect={() => setSelectedFeature(feature)}
                />
            ))}
        </div>

        {selectedFeature && (
            <div key={selectedFeature.title} className="mt-12 max-w-4xl mx-auto text-left bg-white p-8 rounded-lg shadow-lg border border-gray-200 animate-fade-in">
                 <div className="flex items-start gap-6">
                    <div className="text-3xl text-sky-500 mt-1">{selectedFeature.icon}</div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedFeature.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{selectedFeature.details}</p>
                    </div>
                 </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default WhatIsGrowthSphere;