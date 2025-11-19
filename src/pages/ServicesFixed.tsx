interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function ServicesFixed({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      ),
      title: 'Travel, Tourism & Global Mobility',
      status: 'active',
      gradient: 'from-blue-600 via-purple-600 to-blue-800',
      hoverGradient: 'hover:from-blue-700 hover:via-purple-700 hover:to-blue-900',
      description: 'Comprehensive travel and global mobility services tailored to individuals, students, and organizations. From visa consultation to luxury holidays and educational tours.',
      features: [
        'Visa Advisory & Applications',
        'Study Abroad Programs',
        'Edu-Tourism & Academic Exchange',
        'Citizenship & Residency by Investment',
        'Destination Management',
        'Corporate Travel Solutions'
      ],
      cta: {
        primary: {
          text: 'Book Paid Consultation',
          link: 'https://selar.com/776j679167',
          external: true
        },
        secondary: {
          text: 'Free Consultation',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      ),
      title: 'E-Commerce & Digital Markets',
      status: 'active',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      hoverGradient: 'hover:from-emerald-600 hover:via-teal-700 hover:to-cyan-800',
      description: 'Modern e-commerce platform offering groceries, household products, and smart retail solutions through intuitive, technology-driven shopping experiences.',
      features: [
        'Online Shopping Platform',
        'Grocery Delivery Services',
        'Household Products Marketplace',
        'Smart Retail Solutions',
        'Consumer-Supplier Connection',
        'Technology-Driven Experience'
      ],
      cta: {
        primary: {
          text: 'Visit Platform',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
          <path d="M8 11h8v2H8z"/>
          <path d="M8 15h8v2H8z"/>
        </svg>
      ),
      title: 'Agribusiness Solutions',
      status: 'coming-soon',
      gradient: 'from-amber-500 via-orange-600 to-red-600',
      hoverGradient: 'hover:from-amber-600 hover:via-orange-700 hover:to-red-700',
      description: 'Mechanized farming, livestock development, and food processing solutions creating value across the agricultural chain while promoting food security.',
      features: [
        'Mechanized Farming Solutions',
        'Livestock Development',
        'Food Processing Technology',
        'Agricultural Value Chain',
        'Food Security Initiatives',
        'Rural Empowerment Programs'
      ],
      note: 'Currently under development. Stay connected for updates.',
      cta: {
        primary: {
          text: 'Get Updates',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
      title: 'Real Estate & Development',
      status: 'coming-soon',
      gradient: 'from-indigo-600 via-purple-700 to-pink-700',
      hoverGradient: 'hover:from-indigo-700 hover:via-purple-800 hover:to-pink-800',
      description: 'Innovative housing and real estate solutions including property sales, development, and turnkey housing projects for modern living.',
      features: [
        'Property Sales & Investment',
        'Real Estate Development',
        'Turnkey Housing Projects',
        'Innovative Housing Solutions',
        'Property Management',
        'Development Consulting'
      ],
      note: 'Updates will be announced via our digital platforms.',
      cta: {
        primary: {
          text: 'Learn More',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
        </svg>
      ),
      title: 'ICT & Innovation Hub',
      status: 'coming-soon',
      gradient: 'from-slate-600 via-gray-700 to-zinc-800',
      hoverGradient: 'hover:from-slate-700 hover:via-gray-800 hover:to-zinc-900',
      description: 'Digital transformation through software development, telecommunications, and innovation-focused initiatives for the modern business landscape.',
      features: [
        'Software Development',
        'Digital Transformation',
        'Telecommunications Services',
        'Innovation Initiatives',
        'Technology Consulting',
        'Digital Infrastructure'
      ],
      note: 'Service development in progress.',
      cta: {
        primary: {
          text: 'Coming Soon',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      title: 'Learning & Development',
      status: 'coming-soon',
      gradient: 'from-rose-500 via-pink-600 to-fuchsia-700',
      hoverGradient: 'hover:from-rose-600 hover:via-pink-700 hover:to-fuchsia-800',
      description: 'Advanced educational and training programs designed to nurture leadership, global competence, and innovation for the next generation.',
      features: [
        'Leadership Development',
        'Global Competence Training',
        'Innovation Programs',
        'Professional Skills',
        'Educational Solutions',
        'Next-Gen Learning'
      ],
      note: 'Advanced programs in development.',
      cta: {
        primary: {
          text: 'Stay Tuned',
          action: () => {}
        }
      }
    },
    {
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'International Trade & Logistics',
      status: 'coming-soon',
      gradient: 'from-teal-600 via-cyan-700 to-blue-800',
      hoverGradient: 'hover:from-teal-700 hover:via-cyan-800 hover:to-blue-900',
      description: 'Seamless import/export operations, global sourcing, and end-to-end logistics solutions as your trusted partner for international commerce.',
      features: [
        'Import/Export Operations',
        'Global Sourcing Solutions',
        'End-to-End Logistics',
        'International Procurement',
        'Freight Forwarding',
        'Trade Compliance'
      ],
      note: 'Comprehensive trade solutions coming soon.',
      cta: {
        primary: {
          text: 'Get Notified',
          action: () => {}
        }
      }
    }
  ];

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
                OUR SERVICES
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions across multiple sectors to drive your global ambitions forward with innovation and excellence
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const isActive = service.status === 'active';
              
              return (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${service.gradient} ${service.hoverGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform cursor-pointer overflow-hidden ${
                    !isActive ? 'opacity-90' : ''
                  }`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    {/* Status Badge */}
                    {!isActive && (
                      <div className="absolute -top-4 -right-4 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          Coming Soon
                        </div>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-white/70 rounded-full flex-shrink-0"></div>
                          <span className="text-white/80 text-xs">{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-white/60 text-xs italic">
                          +{service.features.length - 4} more services
                        </div>
                      )}
                    </div>

                    {/* Note */}
                    {service.note && (
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-6">
                        <p className="text-white/90 text-xs">
                          <strong>Note:</strong> {service.note}
                        </p>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      {service.cta.primary && (
                        <button
                          onClick={() => {
                            if (service.cta.primary.external && service.cta.primary.link) {
                              handleExternalLink(service.cta.primary.link);
                            } else if (service.cta.primary.action) {
                              service.cta.primary.action();
                            } else {
                              onNavigate('contact');
                            }
                          }}
                          className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
                        >
                          <div className="flex items-center justify-center gap-2">
                            {service.cta.primary.text}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                          </div>
                        </button>
                      )}
                      
                      {service.cta.secondary && (
                        <button
                          onClick={() => onNavigate('contact')}
                          className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 text-sm border border-white/10 hover:border-white/30"
                        >
                          {service.cta.secondary.text}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-teal-100 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Partner with Dresberg Global Limited and unlock opportunities across multiple industries. 
              Let's create sustainable growth and lasting value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Contact Us Today
                </div>
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-bold text-lg border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Learn About Us
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}