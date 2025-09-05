import React from 'react';
import { programsData } from '../assets/data';
import ProgramCard from '../components/ui/ProgramCard';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const ProgramsListPage: React.FC = () => {
  return (
    <div className="bg-white pt-24">
        <section className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">All Programs</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
                        Explore our comprehensive library of programs designed to elevate every aspect of your life.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {programsData.map((program, index) => (
                    <a key={index} href={`#/programs/${slugify(program.title)}`} className="block">
                        <ProgramCard program={program} />
                    </a>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default ProgramsListPage;
