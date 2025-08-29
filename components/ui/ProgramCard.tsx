import React from 'react';
import type { Program } from '../../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden group border border-gray-200 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-xl">
      <div className="overflow-hidden">
        <img src={program.image} alt={program.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
        <p className="text-sm text-sky-600 mb-4 font-semibold">By {program.author}</p>
        <p className="text-gray-600 text-base">{program.description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;