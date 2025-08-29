import React from 'react';
import { galleryImagesData } from '../assets/data';

const Gallery: React.FC = () => {
    // Define span classes for a varied grid layout
    const gridSpans = [
        'col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1',
        'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-2',
        'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1',
        'col-span-1 row-span-1'
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Moments of Transformation</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore glimpses into the vibrant, life-changing experiences within our community.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-6">
                    {galleryImagesData.map((src, index) => (
                        <div key={index} className={`${gridSpans[index % gridSpans.length]} overflow-hidden rounded-lg group`}>
                            <img 
                                src={src} 
                                alt={`Gallery image ${index + 1}`} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;