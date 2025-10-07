
import React from 'react';

const streams = [
  { name: 'Management', icon: 'fa-briefcase' },
  { name: 'Engineering', icon: 'fa-cogs' },
  { name: 'Medical', icon: 'fa-stethoscope' },
  { name: 'Arts', icon: 'fa-paint-brush' },
  { name: 'Commerce', icon: 'fa-chart-line' },
  { name: 'Science', icon: 'fa-flask' },
  { name: 'Pharmacy', icon: 'fa-pills' },
  { name: 'Law', icon: 'fa-gavel' },
  { name: 'Hotel Management', icon: 'fa-concierge-bell' },
  { name: 'Design', icon: 'fa-drafting-compass' },
  { name: 'Agriculture', icon: 'fa-seedling' },
  { name: 'Education', icon: 'fa-user-graduate' },
];

const TopStreams: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Top Streams</h2>
        <p className="text-center text-gray-600 mb-12">Explore the most popular fields of study.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
          {streams.map((stream) => (
            <div
              key={stream.name}
              className="group p-6 border rounded-lg hover:shadow-xl hover:border-brand-orange transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => { try { window.location.hash = '#courses'; } catch (err) {} }}
              onKeyDown={(e) => { if ((e as React.KeyboardEvent).key === 'Enter') { try { window.location.hash = '#courses'; } catch (err) {} } }}
            >
              <div className="text-brand-orange text-5xl mb-4 group-hover:text-brand-blue transition-colors duration-300">
                <i className={`fas ${stream.icon}`}></i>
              </div>
              <h3 className="font-semibold text-gray-800">{stream.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStreams;
