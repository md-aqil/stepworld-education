import React, { useState, useMemo } from 'react';

const collegesData = [
    { name: 'Indian Institute of Technology Bombay', city: 'Mumbai', state: 'Maharashtra', stream: 'Engineering', course: 'B.Tech', image: '/assets/college-1.jpg', approvedBy: 'AICTE', estd: 1958 },
    { name: 'St. Stephen\'s College', city: 'Delhi', state: 'Delhi', stream: 'Arts', course: 'B.A.', image: '/assets/college-2.jpg', approvedBy: 'UGC', estd: 1881 },
    { name: 'Indian Institute of Management Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', stream: 'Management', course: 'MBA', image: '/assets/college-3.jpg', approvedBy: 'AICTE', estd: 1961 },
    { name: 'All India Institute of Medical Sciences', city: 'Delhi', state: 'Delhi', stream: 'Medical', course: 'MBBS', image: '/assets/college-4.jpg', approvedBy: 'MCI', estd: 1956 },
    { name: 'National Law School of India University', city: 'Bengaluru', state: 'Karnataka', stream: 'Law', course: 'LLB', image: '/assets/college-1.jpg', approvedBy: 'BCI', estd: 1986 },
    { name: 'Shri Ram College of Commerce', city: 'Delhi', state: 'Delhi', stream: 'Commerce', course: 'B.Com', image: '/assets/college-2.jpg', approvedBy: 'UGC', estd: 1926 },
    { name: 'National Institute of Design', city: 'Ahmedabad', state: 'Gujarat', stream: 'Design', course: 'B.Des', image: '/assets/college-3.jpg', approvedBy: 'Govt. of India', estd: 1961 },
    { name: 'IIT Madras', city: 'Chennai', state: 'Tamil Nadu', stream: 'Engineering', course: 'B.Tech', image: '/assets/college-4.jpg', approvedBy: 'AICTE', estd: 1959 },
    { name: 'Christ University', city: 'Bengaluru', state: 'Karnataka', stream: 'Management', course: 'BBA', image: '/assets/college-1.jpg', approvedBy: 'UGC', estd: 1969 },
    { name: 'Armed Forces Medical College', city: 'Pune', state: 'Maharashtra', stream: 'Medical', course: 'MBBS', image: '/assets/college-2.jpg', approvedBy: 'MCI', estd: 1948 },
    { name: 'IIT Delhi', city: 'Delhi', state: 'Delhi', stream: 'Engineering', course: 'M.Tech', image: '/assets/college-3.jpg', approvedBy: 'AICTE', estd: 1961 },
    { name: 'Loyola College', city: 'Chennai', state: 'Tamil Nadu', stream: 'Science', course: 'B.Sc', image: '/assets/college-4.jpg', approvedBy: 'UGC', estd: 1925 },
    { name: 'IIM Bangalore', city: 'Bengaluru', state: 'Karnataka', stream: 'Management', course: 'MBA', image: '/assets/college-1.jpg', approvedBy: 'AICTE', estd: 1973 },
];

const filterOptions = {
    streams: ['All Streams', 'Engineering', 'Management', 'Medical', 'Arts', 'Commerce', 'Science', 'Law', 'Design'],
    states: ['All States', 'Maharashtra', 'Delhi', 'Gujarat', 'Karnataka', 'Tamil Nadu'],
    cities: ['All Cities', 'Mumbai', 'Delhi', 'Ahmedabad', 'Bengaluru', 'Chennai', 'Pune'],
    courses: ['All Courses', 'B.Tech', 'M.Tech', 'B.A.', 'MBA', 'BBA', 'MBBS', 'LLB', 'B.Com', 'B.Des', 'B.Sc'],
};


const CollegesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStream, setSelectedStream] = useState('All Streams');
    const [selectedState, setSelectedState] = useState('All States');
    const [selectedCity, setSelectedCity] = useState('All Cities');
    const [selectedCourse, setSelectedCourse] = useState('All Courses');
    const [currentPage, setCurrentPage] = useState(1);
    const collegesPerPage = 8;

    const filteredColleges = useMemo(() => {
        return collegesData.filter(college =>
            (college.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedStream === 'All Streams' || college.stream === selectedStream) &&
            (selectedState === 'All States' || college.state === selectedState) &&
            (selectedCity === 'All Cities' || college.city === selectedCity) &&
            (selectedCourse === 'All Courses' || college.course === selectedCourse)
        );
    }, [searchTerm, selectedStream, selectedState, selectedCity, selectedCourse]);

    const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
    const paginatedColleges = filteredColleges.slice((currentPage - 1) * collegesPerPage, currentPage * collegesPerPage);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/Best-colleges-campus.webp')" }}>
                <div className="absolute inset-0 bg-brand-blue bg-opacity-70"></div>
                <div className="relative container mx-auto px-4 py-20 sm:py-24 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Explore Top Colleges</h1>
                    <div className="text-sm text-gray-200">
                        <span>Home</span> &gt; <span className="font-semibold">Colleges</span>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-6 bg-gray-100 border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                         <input
                            type="text"
                            placeholder="Search College Name..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange"
                        />
                         <select value={selectedStream} onChange={(e) => { setSelectedStream(e.target.value); setCurrentPage(1); }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {filterOptions.streams.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                         <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setCurrentPage(1); }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {filterOptions.states.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                         <select value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value); setCurrentPage(1); }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {filterOptions.cities.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                         <select value={selectedCourse} onChange={(e) => { setSelectedCourse(e.target.value); setCurrentPage(1); }} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {filterOptions.courses.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
            </section>

            {/* Colleges Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {paginatedColleges.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {paginatedColleges.map((college) => (
                               <div key={college.name} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                                    <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-orange transition-colors duration-300 mb-1 h-14">{college.name}</h3>
                                        <p className="text-sm text-gray-600 flex items-center mb-3"><i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>{college.city}, {college.state}</p>
                                        <div className="flex justify-between text-xs text-gray-500 mb-4">
                                            <span><i className="fas fa-check-circle text-green-500 mr-1"></i> {college.approvedBy} Approved</span>
                                            <span><i className="fas fa-calendar-alt text-blue-500 mr-1"></i> Estd. {college.estd}</span>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-gray-100 flex gap-2">
                                            <a href="#admission" onClick={(e) => { e.preventDefault(); try { window.location.hash = '#admission'; } catch (err) {} }} className="w-full text-center bg-brand-orange text-white text-sm font-bold py-2 px-3 rounded-md hover:bg-opacity-90 transition-colors duration-300">Apply Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-semibold text-brand-blue">No Colleges Found</h3>
                            <p className="text-gray-600 mt-2">Try adjusting your filters to find what you're looking for.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                         <div className="flex justify-center items-center space-x-2 mt-12">
                            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button key={page} onClick={() => handlePageChange(page)} className={`px-4 py-2 border rounded-md ${currentPage === page ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white border-gray-300 hover:bg-gray-100'}`}>
                                    {page}
                                </button>
                            ))}
                            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default CollegesPage;
