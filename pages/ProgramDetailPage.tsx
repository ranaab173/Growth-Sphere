import React from 'react';
import { programsData } from '../assets/data';
import Button from '../components/ui/Button';

const ProgramDetailPage: React.FC<{ slug: string }> = ({ slug }) => {
    const program = programsData.find(p => p.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') === slug);

    if (!program) {
        return (
            <div className="pt-32 text-center">
                <h1 className="text-3xl font-bold">Program Not Found</h1>
            </div>
        );
    }

    return (
        <div className="bg-white pt-24">
            <div className="h-64 md:h-96 bg-cover bg-center" style={{backgroundImage: `url(${program.image})`}}></div>
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <p className="text-sky-600 font-semibold">By {program.author}</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 my-4">{program.title}</h1>
                    <p className="text-xl text-gray-600 mb-8">{program.description}</p>
                    <Button href="#/join" size="lg">Enroll in {program.title}</Button>
                    <div className="mt-12 border-t pt-8">
                        <h2 className="text-2xl font-bold mb-4">About This Program</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetailPage;
