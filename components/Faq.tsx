import React from 'react';
import { faqData } from '../assets/data';
import FaqItem from './ui/FaqItem';

const Faq: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;