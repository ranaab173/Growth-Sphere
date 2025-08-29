import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { partnerLogos } from '../assets/data';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section 
        className="relative h-screen flex items-center justify-center text-center pt-20 overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1459255418679-d6424da9ee33?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundPositionY: offsetY * 0.5,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 p-6 flex flex-col items-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 max-w-4xl tracking-tight shadow-text">
            The World's Most Powerful Life Transformation Platform
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl shadow-text">
            Tap into your full potential. Join a global community of learners and get access to 100+ programs by the world’s best minds.
          </p>
          <Button size="lg" variant="primary">Join Growth Sphere</Button>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500 mb-8 text-sm uppercase tracking-widest font-semibold">As Seen On</p>
            <div className="relative w-full overflow-hidden py-4">
                <div className="flex w-max animate-scroll items-center">
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                        React.cloneElement(logo as React.ReactElement, { key: `fwd-${index}` })
                    ))}
                </div>
            </div>
            <div className="relative w-full overflow-hidden py-4 mt-4">
                <div className="flex w-max animate-scroll-reverse items-center">
                    {[...partnerLogos.slice().reverse(), ...partnerLogos.slice().reverse()].map((logo, index) => (
                        React.cloneElement(logo as React.ReactElement, { key: `rev-${index}` })
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;