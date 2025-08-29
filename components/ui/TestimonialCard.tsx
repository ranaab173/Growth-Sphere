import React from 'react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-8 border border-gray-200 flex-shrink-0 w-[320px] md:w-[400px] snap-center shadow-md">
      <div className="flex items-center mb-6">
        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-sky-400" />
        <div>
          <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialCard;