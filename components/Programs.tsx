import React from 'react';
import { programsData } from '../assets/data';
import ProgramCard from './ui/ProgramCard';
import Button from './ui/Button';

const Programs: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          {/* FIX: Corrected typo from 'hh2' to 'h2' for the heading element. */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Unlock Your Full Potential</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our most popular programs designed to elevate every aspect of your life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programsData.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="secondary" size="lg">Browse All Programs</Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;