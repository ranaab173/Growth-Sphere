import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhatIsGrowthSphere from '../components/WhatIsMindvalley';
import Programs from '../components/Programs';
import Instructors from '../components/Instructors';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import Membership from '../components/Membership';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Blog from '../components/Blog';

function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsGrowthSphere />
      <Programs />
      <Instructors />
      <Gallery />
      <Community />
      <Testimonials />
      <Blog />
      <Membership />
      <Faq />
    </>
  );
}

export default HomePage;
