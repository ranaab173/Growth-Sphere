import React from 'react';
import { instructorsData } from '../assets/data';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const InstructorsListPage: React.FC = () => {
  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">Meet Your Teachers</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Learn from legendary teachers, trainers, and authors who are masters in their fields.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {instructorsData.map((instructor, index) => (
                    <a href={`#/instructors/${slugify(instructor.name)}`} key={index} className="flex flex-col items-center group text-center">
                        <img 
                        src={instructor.image} 
                        alt={instructor.name} 
                        className="rounded-full w-32 h-32 object-cover border-4 border-gray-200 group-hover:border-sky-400 transition-all duration-300 transform group-hover:scale-105" 
                        />
                        <p className="text-lg font-semibold mt-4 text-gray-800">{instructor.name}</p>
                    </a>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default InstructorsListPage;
