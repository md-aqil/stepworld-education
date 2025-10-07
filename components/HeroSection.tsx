import React from 'react';

const stats = [
    { value: '1,000+', label: 'Top Colleges', icon: 'fa-university' },
    { value: '500+', label: 'Top Courses', icon: 'fa-book' },
    { value: '100+', label: 'Exams', icon: 'fa-file-alt' },
    { value: '5,000+', label: 'Reviews', icon: 'fa-star' },
];

const HeroSection: React.FC = () => {
  return (
  <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/hero-image.jpg')" }}>
      <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
      <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">Find Your Right Course</h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">Your Gateway to top colleges in India</p>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 rounded-full p-4 mb-3">
                    <i className={`fas ${stat.icon} text-3xl text-brand-orange`}></i>
                </div>
              <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
              <p className="text-sm lg:text-base text-gray-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;