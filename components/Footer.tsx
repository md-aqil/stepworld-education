import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Step<span className="text-brand-orange">World</span></h3>
            <p className="text-sm mb-4">
              Your one-stop destination for information about top colleges, courses, and exams in India. We help you make informed decisions for your future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Top Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Top Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange">Management (MBA/BBA)</a></li>
              <li><a href="#" className="hover:text-brand-orange">Engineering (B.Tech/M.Tech)</a></li>
              <li><a href="#" className="hover:text-brand-orange">Medical (MBBS/BDS)</a></li>
              <li><a href="#" className="hover:text-brand-orange">Law (LLB/LLM)</a></li>
              <li><a href="#" className="hover:text-brand-orange">Commerce (B.Com/M.Com)</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="#" className="hover:text-brand-orange">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-orange">Franchise</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-brand-orange"></i>
                <span>Office No - 3, D- 34, Village Chhalera & Sadarpur, Sector 2, Sector 44, Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-brand-orange"></i>
                <a href="tel:+918709386056" className="hover:text-brand-orange">+918709386056</a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3 text-brand-orange"></i>
                <a href="mailto:support@stepworldeducation.com" className="hover:text-brand-orange">support@stepworldeducation.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-20 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} StepWorld Education. All Rights Reserved.</p>
          <p className="mt-2">Design and Developed By Dizilight India Private Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;