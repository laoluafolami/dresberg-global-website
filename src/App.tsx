import { useState, useEffect } from 'react';
import BasicHeader from './components/BasicHeader';
import SimpleFooter from './components/SimpleFooter';
import DresbotChat from './components/DresbotChat';
import HomeFixed from './pages/HomeFixed';
import AboutFixed from './pages/AboutFixed';
import ServicesFixed from './pages/ServicesFixed';
import BlogFixed from './pages/BlogFixed';
import ContactFixed from './pages/ContactFixed';
import CareersFixed from './pages/CareersFixed';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

type Page = 'home' | 'about' | 'services' | 'blog' | 'contact' | 'careers' | 'privacy' | 'terms' | 'cookies';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = currentPage === 'home'
      ? 'Dresberg Global Limited - Driving Opportunities Beyond Borders'
      : `${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} - Dresberg Global Limited`;
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeFixed onNavigate={handleNavigate} />;
      case 'about':
        return <AboutFixed />;
      case 'services':
        return <ServicesFixed onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogFixed onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactFixed />;
      case 'careers':
        return <CareersFixed onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsOfService onNavigate={handleNavigate} />;
      case 'cookies':
        return <CookiePolicy onNavigate={handleNavigate} />;
      default:
        return <HomeFixed onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <BasicHeader currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <SimpleFooter onNavigate={handleNavigate} />
      <DresbotChat onNavigate={handleNavigate} />
    </div>
  );
}

export default App;