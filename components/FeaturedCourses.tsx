
import React from 'react';

const courses = [
  { name: 'Master of Business Administration (MBA)', description: 'A postgraduate degree focused on business administration and investment management.', image: '/assets/course-mba.png' },
  { name: 'Bachelor of Technology (B.Tech)', description: 'An undergraduate academic degree conferred after completion of a three to five-year program of studies.', image: '/assets/course-btech.png' },
  { name: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)', description: 'The two first professional undergraduate medical degrees in medicine and surgery.', image: '/assets/course-mbbs.png' },
  { name: 'Bachelor of Laws (LLB)', description: 'An undergraduate law degree in the United Kingdom and most common law jurisdictions.', image: '/assets/course-llb.png' },
];

const CourseCard: React.FC<{ name: string; description: string; image: string }> = ({ name, description, image }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-orange transition-colors duration-300 mb-2 flex-grow">{name}</h3>
            <p className="text-sm text-gray-600 mb-4">{description.substring(0, 100)}...</p>
        </div>
    </div>
);


const FeaturedCourses: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Featured Courses</h2>
        <p className="text-center text-gray-600 mb-12">Find the right program to kickstart your career.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#courses" onClick={(e) => { e.preventDefault(); try { window.location.hash = '#courses'; } catch (err) {} }} className="bg-brand-blue text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
