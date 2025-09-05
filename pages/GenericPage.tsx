import React from 'react';

interface GenericPageProps {
  title: string;
  content: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, content }) => {
  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
                {title}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
                {content}
            </p>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;
