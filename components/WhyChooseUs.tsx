import React from 'react';

const features = [
  { text: 'Comprehensive College & Course Info', icon: 'fa-search' },
  { text: 'Expert Counselling & Guidance', icon: 'fa-users' },
  { text: 'Verified Student Reviews', icon: 'fa-star' },
  { text: 'Simplified Application Process', icon: 'fa-file-signature' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 w-full">
            <img src="/assets/whyus-image.jpg" alt="Students studying" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              StepWorld Education is your trusted partner in navigating the complexities of college admissions. We provide reliable information, expert guidance, and a seamless application experience to help you achieve your academic goals.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-start">
                  <div className="bg-brand-orange text-white rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center mr-4 mt-1">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={(e) => { e.preventDefault(); try { window.location.hash = '#contact'; } catch (err) {} }} className="bg-brand-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;