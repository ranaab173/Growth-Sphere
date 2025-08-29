import React from 'react';
import { testimonialsData } from '../assets/data';
import TestimonialCard from './ui/TestimonialCard';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from members of our community who have transformed their lives with Growth Sphere.
          </p>
        </div>
      </div>
      <div className="relative w-full overflow-hidden mask-image-lr py-8">
        <div className="flex w-max animate-scroll-testimonials">
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <div key={index} className="mx-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;