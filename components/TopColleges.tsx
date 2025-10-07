
import React from 'react';

const colleges = [
  { name: 'Indian Institute of Technology, Bombay', location: 'Mumbai, Maharashtra', image: '/assets/college-1.jpg' },
  { name: 'Indian Institute of Management, Ahmedabad', location: 'Ahmedabad, Gujarat', image: '/assets/college-2.jpg' },
  { name: 'All India Institute Of Medical Sciences, Delhi', location: 'New Delhi, Delhi', image: '/assets/college-3.jpg' },
  { name: 'National Law School of India University, Bangalore', location: 'Bengaluru, Karnataka', image: '/assets/college-4.jpg' },
];

const CollegeCard: React.FC<{ name: string; location: string; image: string }> = ({ name, location, image }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-orange transition-colors duration-300 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 flex items-center"><i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>{location}</p>
    </div>
    <a href="#admission" onClick={(e) => { e.preventDefault(); try { window.location.hash = '#admission'; } catch (err) {} }} className="block bg-brand-orange text-white text-center font-bold py-3 hover:bg-brand-blue transition-colors duration-300">Apply Now</a>
  </div>
);


const TopColleges: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Top Colleges in India</h2>
        <p className="text-center text-gray-600 mb-12">Discover premier institutions for your future.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {colleges.map((college) => (
            <CollegeCard key={college.name} {...college} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#colleges" onClick={(e) => { e.preventDefault(); try { window.location.hash = '#colleges'; } catch (err) {} }} className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">
            View All Colleges
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopColleges;
