import { ShoppingBag, Plane, GraduationCap, Wheat, Building, Package, ArrowRight, Clock } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: ShoppingBag,
      title: 'E-Commerce',
      status: 'active',
      description: 'Comprehensive digital marketplace solutions designed to connect your products with global customers. We provide end-to-end e-commerce infrastructure, from platform development to payment integration and logistics management.',
      features: [
        'Online marketplace development',
        'Product catalog management',
        'Secure payment gateway integration',
        'Order fulfillment and logistics',
        'Customer relationship management',
        'Digital marketing and SEO'
      ],
      caseStudy: 'Helped multiple businesses transition to online sales, achieving 200% revenue growth in the first year.'
    },
    {
      icon: Plane,
      title: 'Travel, Global Mobility and Destination Management',
      status: 'active',
      description: 'Expert guidance for international travel, relocation, and destination experiences. We handle all aspects of global mobility, from visa processing to cultural integration and educational tourism programs.',
      features: [
        'Study abroad programs',
        'Work visa consultation',
        'Immigration services',
        'Destination management',
        'Educational tourism (EduTourism)',
        'Corporate relocation services'
      ],
      caseStudy: 'Successfully facilitated over 500 students and professionals in their global mobility journeys.'
    },
    {
      icon: GraduationCap,
      title: 'Learning and Development',
      status: 'active',
      description: 'Professional training and educational programs designed to enhance skills and advance careers. We offer customized learning solutions for individuals and organizations seeking to stay competitive in the global marketplace.',
      features: [
        'Professional skills training',
        'Leadership development programs',
        'Industry certification courses',
        'Corporate training solutions',
        'Educational consulting',
        'Career advancement programs'
      ],
      caseStudy: 'Trained over 1,000 professionals across various industries with 95% satisfaction rate.'
    },
    {
      icon: Wheat,
      title: 'Agribusiness and Food Processing',
      status: 'coming-soon',
      description: 'Innovative agricultural solutions and food processing services that connect farms to markets. We focus on sustainable agriculture practices, modern farming techniques, and efficient supply chain management.',
      features: [
        'Agricultural consulting',
        'Farm-to-market solutions',
        'Food processing technology',
        'Supply chain optimization',
        'Quality assurance systems',
        'Export facilitation'
      ]
    },
    {
      icon: Building,
      title: 'Real Estate and Property Development',
      status: 'coming-soon',
      description: 'Strategic real estate investment and property development services for both residential and commercial projects. We provide comprehensive solutions from property acquisition to development and management.',
      features: [
        'Property investment consulting',
        'Real estate development',
        'Property management services',
        'Market analysis and research',
        'Investment portfolio management',
        'International property services'
      ]
    },
    {
      icon: Package,
      title: 'International Trade, Procurement and Logistics',
      status: 'coming-soon',
      description: 'End-to-end international trade facilitation, strategic procurement, and logistics management. We streamline global supply chains and enable seamless cross-border commerce.',
      features: [
        'Global sourcing and procurement',
        'Import/export facilitation',
        'Customs clearance services',
        'Freight forwarding',
        'Supply chain management',
        'Trade documentation'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive solutions across multiple sectors to drive your global ambitions forward
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = service.status === 'active';

              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    !isActive ? 'opacity-90' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                    <div className="lg:col-span-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 ${
                          isActive ? 'bg-gradient-to-br from-blue-900 to-blue-700' : 'bg-gray-400'
                        } rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        {!isActive && (
                          <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                            <Clock size={16} />
                            Coming Soon
                          </div>
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      {isActive && (
                        <button
                          onClick={() => onNavigate('contact')}
                          className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
                        >
                          Get Started
                          <ArrowRight size={18} />
                        </button>
                      )}
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features & Services</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {service.caseStudy && (
                        <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                          <h4 className="font-bold text-blue-900 mb-2">Success Story</h4>
                          <p className="text-gray-700 italic">{service.caseStudy}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our services can help you achieve your global business objectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
