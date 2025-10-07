
import React from 'react';
import HeroSection from './HeroSection';
import TopStreams from './TopStreams';
import WhyChooseUs from './WhyChooseUs';
import TopColleges from './TopColleges';
import FeaturedCourses from './FeaturedCourses';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TopStreams />
      <WhyChooseUs />
      <TopColleges />
      <FeaturedCourses />
    </>
  );
};

export default HomePage;