import React, { useState } from 'react';

const navLinks = [
  { name: 'Home', page: 'home' },
  { name: 'About Us', page: 'about' },
  { name: 'Courses', page: 'courses' },
  { name: 'Colleges', page: 'colleges' },
  { name: 'Admission', page: 'admission' },
  { name: 'Contact Us', page: 'contact' },
];

interface HeaderProps {
  setPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page?: string) => {
    if (page) {
      setPage(page);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-brand-blue text-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+918709386056" className="flex items-center space-x-1 hover:text-brand-orange">
              <i className="fas fa-phone-alt"></i>
              <span>+918709386056</span>
            </a>
            <a href="mailto:support@stepworldeducation.com" className="hidden sm:flex items-center space-x-1 hover:text-brand-orange">
              <i className="fas fa-envelope"></i>
              <span>support@stepworldeducation.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-brand-orange"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-brand-orange"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-brand-orange"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-brand-orange"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 bg-white z-50 py-3 px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0">
             <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-2xl font-bold text-brand-blue">Step<span className="text-brand-orange">World</span></a>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                // FIX: Property 'href' does not exist on type '{ name: string; page: string; }'.
                href="#" 
                onClick={(e) => { if (link.page) { e.preventDefault(); handleNavClick(link.page); } }} 
                className="text-gray-700 hover:text-brand-orange font-medium transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex items-center">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('admission'); }} className="bg-brand-orange text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90">Apply Now</a>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-blue focus:outline-none">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              // FIX: Property 'href' does not exist on type '{ name: string; page: string; }'.
              href="#" 
              onClick={(e) => { if (link.page) { e.preventDefault(); handleNavClick(link.page); } }} 
              className="block text-gray-700 hover:text-brand-orange py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="border-t pt-4">
             <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('admission'); }} className="block text-center bg-brand-orange text-white px-4 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90">Apply Now</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;