import React from 'react';
import { instructorsData, programsData } from '../assets/data';
import ProgramCard from '../components/ui/ProgramCard';
import Button from '../components/ui/Button';

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const InstructorDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
    const instructor = instructorsData.find(i => slugify(i.name) === slug);
    const instructorPrograms = programsData.filter(p => p.author === instructor?.name);

    if (!instructor) {
        return (
            <div className="pt-32 text-center">
                <h1 className="text-3xl font-bold">Instructor Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white pt-24 min-h-screen">
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img src={instructor.image} alt={instructor.name} className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-lg"/>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">{instructor.name}</h1>
                            <p className="text-xl text-gray-600 mt-2">World-renowned expert in personal transformation.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Programs by {instructor.name}</h2>
                    {instructorPrograms.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {instructorPrograms.map((program, index) => (
                                <a key={index} href={`#/programs/${slugify(program.title)}`} className="block">
                                    <ProgramCard program={program} />
                                </a>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">More programs from {instructor.name} are coming soon!</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default InstructorDetailPage;
