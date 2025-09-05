import React from 'react';
import { instructorsData } from '../assets/data';
import Button from './ui/Button';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const Instructors: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Guided by the World's Best</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Learn from legendary teachers, trainers, and authors who are masters in their fields. Growth Sphere brings their wisdom directly to you.
            </p>
            <Button href="#/instructors" variant="primary" size="lg">Meet Your Teachers</Button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-4">
            {instructorsData.map((instructor, index) => (
              <a href={`#/instructors/${slugify(instructor.name)}`} key={index} className="flex flex-col items-center group">
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="rounded-full w-24 h-24 object-cover border-2 border-gray-200 group-hover:border-sky-400 transition-all duration-300" 
                />
                <p className="text-sm mt-2 text-center text-gray-700">{instructor.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
