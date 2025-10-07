
import React from 'react';

const newsItems = [
  { title: 'NEET 2024 Exam Dates Announced', date: 'Dec 15, 2023', image: '/assets/college-1.jpg' },
  { title: 'Top 10 Emerging Engineering Fields in India', date: 'Dec 12, 2023', image: '/assets/college-2.jpg' },
  { title: 'IIMs to Increase Intake for MBA Programs', date: 'Dec 10, 2023', image: '/assets/college-3.jpg' },
];

const NewsCard: React.FC<{ title: string; date: string; image: string }> = ({ title, date, image }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
        <img src={image} alt={title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300" />
        <div className="p-5">
            <p className="text-sm text-gray-500 mb-2"><i className="fas fa-calendar-alt mr-2"></i>{date}</p>
            <h3 className="text-lg font-semibold text-brand-dark mb-4 h-16">{title}</h3>
            <a href="#" className="font-semibold text-brand-blue hover:text-brand-orange transition-colors duration-300">Read More <i className="fas fa-long-arrow-alt-right ml-1"></i></a>
        </div>
    </div>
);


const LatestNews: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Latest News & Updates</h2>
        <p className="text-center text-gray-600 mb-12">Stay informed about the latest in the world of education.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
