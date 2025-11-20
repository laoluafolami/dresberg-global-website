import { useState, useEffect } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function HomeFixed({ onNavigate }: HomeProps) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Global Travel & Tourism'
    },
    {
      url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'E-Commerce Excellence'
    },
    {
      url: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Education & Development'
    },
    {
      url: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'International Business'
    },
    {
      url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920',
      title: 'Global Opportunities'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const services = [
    {
      title: 'Travel, Tourism & Global Mobility',
      description: 'Comprehensive visa services, destination management, and global mobility solutions for seamless international experiences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      )
    },
    {
      title: 'E-Commerce & Digital Solutions',
      description: 'Innovative online marketplace platforms and digital commerce solutions connecting businesses with global markets.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      )
    },
    {
      title: 'Agribusiness & Real Estate',
      description: 'Sustainable agricultural innovations and strategic real estate development projects across Nigeria and beyond.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
          <path d="M8 11h8v2H8z" />
          <path d="M8 15h8v2H8z" />
        </svg>
      )
    },
    {
      title: 'ICT & Learning Development',
      description: 'Cutting-edge technology solutions and professional development programs for digital transformation.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
      )
    },
    {
      title: 'International Trade & Logistics',
      description: 'Strategic procurement, logistics management, and international trade facilitation services.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      )
    },
    {
      title: 'Business Consulting',
      description: 'Expert advisory services for business growth, market expansion, and operational excellence.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    }
  ];

  const stats = [
    { value: '6+', label: 'Industry Sectors', icon: '🏢' },
    { value: '25+', label: 'Countries Reached', icon: '🌍' },
    { value: '1000+', label: 'Clients Served', icon: '👥' },
    { value: '98%', label: 'Client Satisfaction', icon: '📈' },
    { value: '20+', label: 'Years Combined Experience', icon: '🏆' },
    { value: '50+', label: 'Strategic Partnerships', icon: '🤝' }
  ];

  return (
    <div className="pt-20">
      <style>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 0 0 4px rgba(0, 0, 0, 0.5);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .gradient-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
          background-size: 400% 400%;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[650px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{
                backgroundImage: `url(${image.url})`,
                filter: 'brightness(0.8) contrast(1.1) saturate(1.1)',
                animation: index === currentImageIndex ? 'kenburns 20s ease-out' : 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/40 to-teal-900/45" />
          </div>
        ))}

        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto text-center text-white z-10 pb-8 pt-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="text-white drop-shadow-2xl" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8), 0 0 12px rgba(0,0,0,0.6)' }}>
                {t('hero.title')}
              </span>
            </h1>

            <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 md:p-8 mb-10 border border-white/30 shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-4xl mx-auto" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-16 px-4" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => onNavigate('services')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                {t('hero.cta.services')}
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                {t('hero.cta.consultation')}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                {t('hero.cta.partner')}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm3-8C6.48 4 2 8.48 2 14s4.48 10 10 10 10-4.48 10-10S17.52 4 12 4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:hidden">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
          </svg>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0f172a" />
          </svg>
        </div>

        <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                ? 'bg-amber-500 w-10'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Strategic Business Divisions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As a diversified global enterprise, we deliver comprehensive solutions across multiple sectors to drive innovation, enhance lives, and create lasting value worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 dark:from-teal-600 dark:via-blue-700 dark:to-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-teal-100 dark:border-slate-700"
              >
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-200 mb-4 text-sm leading-relaxed">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                >
                  Learn More
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-gradient-to-r from-slate-900 to-teal-800 hover:from-slate-800 hover:to-teal-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Global Impact</h2>
            <p className="text-lg text-gray-200">
              Driving innovation across industries and transforming lives through sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Partner with Dresberg Global Limited and unlock opportunities across multiple industries. From global mobility and e-commerce to agribusiness and real estate, we deliver innovative solutions that drive sustainable growth and create lasting value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-slate-900 to-teal-800 hover:from-slate-800 hover:to-teal-700 dark:from-teal-600 dark:to-blue-700 dark:hover:from-teal-700 dark:hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
              >
                Start Your Journey Today
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 border border-gray-300 dark:border-slate-600"
              >
                Discover Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}