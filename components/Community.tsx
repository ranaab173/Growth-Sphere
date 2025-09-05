import React from 'react';
import Button from './ui/Button';

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-white">{value}</p>
        <p className="text-md text-gray-200">{label}</p>
    </div>
);

const Community: React.FC = () => {
  return (
    <section 
        className="relative py-24 text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
    >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">Join The World's Most Supportive Community</h2>
            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto">You're not on this journey alone. Connect with millions of people from every corner of the planet, all dedicated to personal growth.</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-12">
                <StatItem value="20M" label="Students Worldwide" />
                <StatItem value="200+" label="Countries" />
                <StatItem value="500+" label="Local Meetups" />
            </div>

            <Button href="#/join" size="lg" variant="primary">Become a Member</Button>
        </div>
    </section>
  );
};

export default Community;
