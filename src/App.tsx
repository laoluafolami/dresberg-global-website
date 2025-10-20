import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'services' | 'blog' | 'contact';

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
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
