import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsMindvalley from './components/WhatIsMindvalley';
import Programs from './components/Programs';
import Instructors from './components/Instructors';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Membership from './components/Membership';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Blog from './components/Blog';

function App() {
  return (
    <div className="text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <WhatIsMindvalley />
        <Programs />
        <Instructors />
        <Gallery />
        <Community />
        <Testimonials />
        <Blog />
        <Membership />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;