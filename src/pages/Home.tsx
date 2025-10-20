import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Users, TrendingUp, Award, ShoppingBag, Plane, GraduationCap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
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
      icon: ShoppingBag,
      title: 'E-Commerce',
      description: 'Innovative online marketplace solutions connecting products with global customers.'
    },
    {
      icon: Plane,
      title: 'Travel & Global Mobility',
      description: 'Comprehensive destination management and global mobility services.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional training and educational programs for career advancement.'
    }
  ];

  const stats = [
    { icon: Globe, value: '20+', label: 'Countries Reached' },
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '15+', label: 'Years Combined Experience' }
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{
                backgroundImage: `url(${image.url})`,
                animation: index === currentImageIndex ? 'kenburns 20s ease-out' : 'none'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-teal-900/80" />
          </div>
        ))}

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl mx-auto text-center text-white z-10">
            <div className="mb-6 animate-fade-in">
              <img
                src="/Dresberg.png"
                alt="Dresberg Global"
                className="h-24 md:h-32 w-auto mx-auto mb-4 drop-shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
              Connecting People, Business, and Opportunities Across the World
            </h1>
            <p className="text-xl md:text-3xl mb-8 text-amber-300 font-semibold animate-slide-up animation-delay-200">
              Driving Opportunities Beyond Borders
            </p>
            <p className="text-base md:text-lg mb-10 text-gray-100 max-w-3xl mx-auto animate-slide-up animation-delay-400">
              Dresberg Global Limited is your trusted partner in navigating the complexities of global business,
              travel, education, and commerce. We bridge continents and create pathways to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
              <button
                onClick={() => onNavigate('services')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl"
              >
                Explore Our Services
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105 shadow-xl"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="dark:hidden">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#0f172a"/>
          </svg>
        </div>

        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-amber-500 w-8'
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
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We deliver comprehensive solutions across multiple sectors to drive your global ambitions forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-white dark:from-slate-800 dark:to-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-teal-100 dark:border-slate-700"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-teal-700 dark:from-teal-600 dark:to-teal-800 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-teal-700 dark:text-teal-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              );
            })}
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
            <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-gray-200">
              Building bridges across borders and creating lasting opportunities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                    <Icon size={32} className="text-amber-400" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to Go Global?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let us help you navigate opportunities across borders. Whether you're looking to expand your business,
              explore new markets, or enhance your global mobility, we're here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-900 dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Get Started Today
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
