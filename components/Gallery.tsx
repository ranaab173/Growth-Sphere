import React, { useState, useEffect } from 'react';
import { galleryImagesData } from '../assets/data';
import type { GalleryImage } from '../types';

const Lightbox: React.FC<{
    images: GalleryImage[];
    selectedIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}> = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
    const image = images[selectedIndex];

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose, onNext, onPrev]);

    if (!image) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
        >
            <div 
                className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl" 
                onClick={e => e.stopPropagation()}
            >
                <div className="w-full md:w-2/3 bg-black flex items-center justify-center">
                    <img src={image.src} alt={image.title} className="max-h-[60vh] md:max-h-[90vh] w-auto h-auto object-contain" />
                </div>
                <div className="p-6 flex flex-col justify-center md:w-1/3">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{image.title}</h3>
                    <p className="text-gray-600">{image.description}</p>
                </div>
                <button onClick={onClose} aria-label="Close lightbox" className="absolute top-2 right-2 text-white md:text-gray-500 bg-black/30 md:bg-transparent rounded-full w-10 h-10 flex items-center justify-center text-3xl hover:opacity-75 transition-opacity">&times;</button>
                <button onClick={onPrev} aria-label="Previous image" className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition-colors">&lt;</button>
                <button onClick={onNext} aria-label="Next image" className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/50 transition-colors">&gt;</button>
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    const gridSpans = [
        'col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1',
        'col-span-2 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-2',
        'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1',
        'col-span-1 row-span-1'
    ];
    
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % galleryImagesData.length : null);
    const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + galleryImagesData.length) % galleryImagesData.length : null);

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
                    {galleryImagesData.map((image, index) => (
                        <div 
                            key={index} 
                            className={`${gridSpans[index % gridSpans.length]} overflow-hidden rounded-lg group cursor-pointer`}
                            onClick={() => openLightbox(index)}
                        >
                            <img 
                                src={image.src} 
                                alt={image.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
            {lightboxIndex !== null && (
                <Lightbox
                    images={galleryImagesData}
                    selectedIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}
        </section>
    );
};

export default Gallery;
