import React from 'react';

const stats = [
    { value: '10,000+', label: 'Students Counselled', icon: 'fa-user-friends' },
    { value: '1,200+', label: 'Partner Institutions', icon: 'fa-university' },
    { value: '98%', label: 'Satisfaction Rate', icon: 'fa-smile' },
    { value: '50+', label: 'Expert Counselors', icon: 'fa-user-tie' },
];

const features = [
  { title: 'Unbiased Information', text: 'Access a vast repository of accurate and up-to-date data on colleges, courses, and exams.', icon: 'fa-database' },
  { title: 'Personalized Guidance', text: 'Our expert counselors provide tailored advice to match your unique aspirations and goals.', icon: 'fa-hands-helping' },
  { title: 'Simplified Process', text: 'We streamline the entire application process, making it seamless, transparent, and stress-free.', icon: 'fa-file-signature' },
  { title: 'Community Insights', text: 'Leverage genuine insights and reviews from a large community of students and alumni.', icon: 'fa-comments' },
];

const AboutUs: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
  <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/assets/Best-colleges-campus.webp')" }}>
        <div className="absolute inset-0 bg-brand-blue bg-opacity-80"></div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About StepWorld Education</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">Your Trusted Partner on the Journey to Higher Education</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <img src="/assets/whyus-image.jpg" alt="Team discussing" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="lg:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-brand-blue mb-4">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                StepWorld Education is India's premier educational portal, dedicated to guiding students toward their ideal academic and career paths. We were founded on the principle that every student deserves access to comprehensive, reliable, and unbiased information to make one of the most important decisions of their life.
              </p>
              <p className="text-gray-600">
                Our platform provides an extensive database of colleges, universities, courses, and entrance exams across the country. We go beyond simple listings by offering expert counseling, authentic student reviews, and a simplified application process, empowering you to navigate the complexities of admissions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-brand-orange text-5xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">Our Mission</h3>
              <p className="text-gray-600">To empower students with the knowledge and guidance needed to make informed decisions about their academic future, connecting them with the best educational opportunities available.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-brand-orange text-5xl mb-4">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">Our Vision</h3>
              <p className="text-gray-600">To be India's most trusted and comprehensive admission platform, simplifying the path to higher education for every student through technology and expert guidance.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                    <div className="border-2 border-brand-orange rounded-full p-4 mb-3">
                        <i className={`fas ${stat.icon} text-3xl text-brand-orange`}></i>
                    </div>
                  <p className="text-3xl lg:text-4xl font-bold">{stat.value}</p>
                  <p className="text-sm lg:text-base text-gray-200">{stat.label}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-brand-blue mb-2">Why Choose StepWorld Education?</h2>
          <p className="text-center text-gray-600 mb-12">We are committed to your success.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 border rounded-lg hover:shadow-xl hover:border-brand-orange transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-brand-orange text-5xl mb-4">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="font-bold text-lg text-brand-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;