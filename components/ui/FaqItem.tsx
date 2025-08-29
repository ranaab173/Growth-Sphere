import React, { useState } from 'react';
import type { FaqItem as FaqItemType } from '../../types';

interface FaqItemProps {
  item: FaqItemType;
}

const FaqItem: React.FC<FaqItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-6 focus:outline-none"
      >
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{item.question}</h3>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <i className={`fa-solid fa-chevron-down text-sky-500`}></i>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="text-gray-600 pb-6 pr-4">{item.answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;