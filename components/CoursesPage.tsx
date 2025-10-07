import React, { useState, useMemo } from 'react';

const coursesData = [
    { name: 'MBA', stream: 'Management', level: 'Postgraduate', type: 'Full-time', description: 'Master of Business Administration.', icon: 'fa-briefcase' },
    { name: 'B.Tech', stream: 'Engineering', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Technology.', icon: 'fa-cogs' },
    { name: 'MBBS', stream: 'Medical', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Medicine, Bachelor of Surgery.', icon: 'fa-stethoscope' },
    { name: 'B.A.', stream: 'Arts', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Arts.', icon: 'fa-paint-brush' },
    { name: 'B.Com', stream: 'Commerce', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Commerce.', icon: 'fa-chart-line' },
    { name: 'B.Sc', stream: 'Science', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Science.', icon: 'fa-flask' },
    { name: 'M.Tech', stream: 'Engineering', level: 'Postgraduate', type: 'Full-time', description: 'Master of Technology.', icon: 'fa-cogs' },
    { name: 'M.D.', stream: 'Medical', level: 'Postgraduate', type: 'Full-time', description: 'Doctor of Medicine.', icon: 'fa-user-md' },
    { name: 'LLB', stream: 'Law', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Laws.', icon: 'fa-gavel' },
    { name: 'B.Arch', stream: 'Design', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Architecture.', icon: 'fa-drafting-compass' },
    { name: 'B.Pharm', stream: 'Pharmacy', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Pharmacy.', icon: 'fa-pills' },
    { name: 'M.Com', stream: 'Commerce', level: 'Postgraduate', type: 'Part-time', description: 'Master of Commerce.', icon: 'fa-chart-pie' },
    { name: 'M.A.', stream: 'Arts', level: 'Postgraduate', type: 'Distance', description: 'Master of Arts.', icon: 'fa-palette' },
    { name: 'Diploma in IT', stream: 'Engineering', level: 'Diploma', type: 'Full-time', description: 'Information Technology Diploma.', icon: 'fa-laptop-code' },
    { name: 'BBA', stream: 'Management', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Business Administration.', icon: 'fa-user-tie' },
    { name: 'BCA', stream: 'Science', level: 'Undergraduate', type: 'Full-time', description: 'Bachelor of Computer Applications.', icon: 'fa-desktop' },
];

const streams = ['All Streams', 'Management', 'Engineering', 'Medical', 'Arts', 'Commerce', 'Science', 'Law', 'Design', 'Pharmacy'];
const levels = ['All Levels', 'Undergraduate', 'Postgraduate', 'Diploma'];
const types = ['All Types', 'Full-time', 'Part-time', 'Distance'];

const CoursesPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStream, setSelectedStream] = useState('All Streams');
    const [selectedLevel, setSelectedLevel] = useState('All Levels');
    const [selectedType, setSelectedType] = useState('All Types');
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 12;

    const filteredCourses = useMemo(() => {
        return coursesData.filter(course =>
            (course.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedStream === 'All Streams' || course.stream === selectedStream) &&
            (selectedLevel === 'All Levels' || course.level === selectedLevel) &&
            (selectedType === 'All Types' || course.type === selectedType)
        );
    }, [searchTerm, selectedStream, selectedLevel, selectedType]);

    const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
    const paginatedCourses = filteredCourses.slice((currentPage - 1) * coursesPerPage, currentPage * coursesPerPage);
    
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
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">Explore Our Courses</h1>
                    <div className="text-sm text-gray-200">
                        <span>Home</span> &gt; <span className="font-semibold">Courses</span>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-8 bg-gray-100 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                        <input
                            type="text"
                            placeholder="Search Course..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange lg:col-span-2"
                        />
                         <select value={selectedStream} onChange={(e) => setSelectedStream(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {streams.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                            {levels.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange appearance-none">
                           {types.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    {paginatedCourses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {paginatedCourses.map((course) => (
                                <div key={course.name} className="group p-6 border rounded-lg hover:shadow-xl hover:border-brand-orange transform hover:-translate-y-1 transition-all duration-300 flex flex-col text-center items-center">
                                    <div className="text-brand-orange text-5xl mb-4 group-hover:text-brand-blue transition-colors duration-300">
                                        <i className={`fas ${course.icon}`}></i>
                                    </div>
                                    <h3 className="font-bold text-lg text-brand-dark mb-2">{course.name}</h3>
                                    <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{course.stream} | {course.level}</span>
                                    <a href="#" className="mt-4 text-brand-blue font-semibold hover:text-brand-orange">Learn More <i className="fas fa-arrow-right ml-1"></i></a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <h3 className="text-2xl font-semibold text-brand-blue">No Courses Found</h3>
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

export default CoursesPage;