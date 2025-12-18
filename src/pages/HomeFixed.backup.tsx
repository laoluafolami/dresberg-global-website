import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function HomeFixed({ onNavigate }: HomeProps) {
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
      icon: '✈️'
    },
    {
      title: 'E-Commerce & Digital Solutions',
      description: 'Innovative online marketplace platforms and digital commerce solutions connecting businesses with global markets.',
      icon: '🛒'
    },
    {
      title: 'Agribusiness & Real Estate',
      description: 'Sustainable agricultural innovations and strategic real estate development projects across Nigeria and beyond.',
      icon: '�'
    },
    {
      title: 'ICT & Learning Development',
      description: 'Cutting-edge technology solutions and professional development programs for digital transformation.',
      icon: '💻'
    },
    {
      title: 'International Trade & Logistics',
      description: 'Strategic procurement, logistics management, and international trade facilitation services.',
      icon: '🌍'
    },
    {
      title: 'Business Consulting',
      description: 'Expert advisory services for business growth, market expansion, and operational excellence.',
      icon: '💼'
    }
  ];

  const stats = [
    {
      value: '6+', label: 'Industry Sectors', icon: '�' '},
    { value: '25+', label: 'Countries Reached', icon: '🌍' },
    { value: '1000+', label: 'Clients Served', icon: '👥' },
    { value: '98%', label: 'Client Satisfaction', icon: '📈' },
    { value: '20+', label: 'Years Combined Experience', icon: '🏆' },
    { value: '50+', label: 'Strategic Partnerships', icon: '🤝' }
  ];

  return (
    <div className="pt-20">
      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-md {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 0 0 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 brightness-110 contrast-110"
              style={{
                backgroundImage: `url(${image.url})`,
                animation: index === currentImageIndex ? 'kenburns 20s ease-out' : 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-teal-900/55" />
          </div>
        ))}

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white z-10 pb-32 md:pb-40 drop-shadow-2xl">
            <div className="mb-6 animate-fade-in">
              <img
                src="/Dresberg.png"
                alt="Dresberg Global"
                className="h-24 md:h-32 w-auto mx-auto mb-4 drop-shadow-2xl"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>


            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up text-shadow-lg">
              Driving Innovation. Connecting Opportunities. Transforming Lives Globally.
            </h1>
            <p className="text-base md:text-lg mb-10 text-gray-100 max-w-4xl mx-auto animate-slide-up animation-delay-400 text-shadow-md">
              Dresberg Global Limited is a forward-thinking, multi-industry company committed to excellence across sectors — from Travel, Tourism and Global Mobility to E-Commerce, Agribusiness, Learning and Development, Real Estate, ICT, and International Trade. We deliver reliable, innovative, and customer-centered solutions designed to create sustainable impact and global value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600 mb-16 px-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                Explore Our Services
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                Book Free Visa Consultation
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl text-sm md:text-base whitespace-nowrap"
              >
                Partner With Us
                <span>🤝</span>
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

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Strategic Business Divisions</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              As a diversified global enterprise, we deliver comprehensive solutions across multiple sectors to drive innovation, enhance lives, and create lasting value worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-teal-100 dark:border-slate-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-teal-700 dark:from-teal-600 dark:to-teal-800 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
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
              className="text-teal-700 dark:text-teal-400 font-semibold text-lg hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

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
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="bg-slate-900 dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Start Your Journey Today
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
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