import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ["Channels", "Programs", "Live Events", "For Business"];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 tracking-wider">GROWTH SPHERE</div>
                
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link} href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">{link}</a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">
                        <i className="fa-solid fa-search"></i>
                    </button>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Log In</a>
                    <Button variant="outline" size="sm">Join Growth Sphere</Button>
                </div>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 text-2xl">
                        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map(link => (
                            <a key={link} href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-lg">{link}</a>
                        ))}
                        <div className="flex flex-col items-center space-y-4 pt-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Log In</a>
                            <Button variant="primary" size="md">Join Growth Sphere</Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;