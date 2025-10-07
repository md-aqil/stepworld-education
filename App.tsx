import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import CoursesPage from './components/CoursesPage';
import CollegesPage from './components/CollegesPage';
import AdmissionPage from './components/AdmissionPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [page, setPageState] = useState('home');

  // navigate updates app state and the location.hash so other components can navigate by changing the hash
  const navigate = (newPage: string) => {
    setPageState(newPage);
    try {
      // keep hash consistent (prepend #)
      if (window && window.location) window.location.hash = `#${newPage}`;
    } catch (e) {
      // ignore in non-browser environments
    }
  };

  // Initialize page from hash and listen for hash changes
  React.useEffect(() => {
    const setFromHash = () => {
      const hash = (window.location.hash || '').replace('#', '') || 'home';
      setPageState(hash);
    };

    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  }, []);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutUs />;
      case 'courses':
        return <CoursesPage />;
      case 'colleges':
        return <CollegesPage />;
      case 'admission':
        return <AdmissionPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header setPage={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;