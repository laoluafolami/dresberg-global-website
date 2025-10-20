import { Target, Eye, Heart, ShoppingBag, Plane, GraduationCap, Wheat, Building, Package } from 'lucide-react';

export default function About() {
  const divisions = [
    {
      icon: ShoppingBag,
      title: 'E-Commerce',
      description: 'Digital marketplace solutions and online business infrastructure'
    },
    {
      icon: Plane,
      title: 'Travel & Global Mobility',
      description: 'Destination management and international mobility services'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional training and educational advancement programs'
    },
    {
      icon: Wheat,
      title: 'Agribusiness & Food Processing',
      description: 'Agricultural innovation and food supply chain solutions'
    },
    {
      icon: Building,
      title: 'Real Estate & Property',
      description: 'Property development and real estate investment services'
    },
    {
      icon: Package,
      title: 'International Trade & Logistics',
      description: 'Global procurement, trade facilitation, and logistics management'
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, delivering quality and professionalism.'
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and forward-thinking solutions to meet evolving global challenges.'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our dealings.'
    },
    {
      title: 'Collaboration',
      description: 'We build strong partnerships and work together to achieve shared success.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Dresberg Global Limited</h1>
            <p className="text-xl text-blue-100">
              Your trusted partner in navigating global opportunities across multiple industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Company Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Dresberg Global Limited is a dynamic, multi-sector international business enterprise committed to
                connecting people, businesses, and opportunities across borders. We operate at the intersection of
                commerce, travel, education, agriculture, real estate, and international trade.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to break down barriers and create pathways for individuals and organizations to thrive
                in an increasingly interconnected world. With a presence spanning multiple continents, we bring together
                local expertise and global vision to deliver exceptional results.
              </p>
              <p className="text-lg leading-relaxed">
                Through our diverse portfolio of services, we empower clients to expand their reach, optimize their
                operations, and unlock new possibilities in the global marketplace. Whether you're looking to study
                abroad, grow your business internationally, or access new markets, Dresberg Global is your gateway
                to success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To drive opportunities beyond borders by delivering innovative, world-class solutions that connect
                people, businesses, and markets across the globe. We are committed to creating value, fostering growth,
                and enabling success in every venture we undertake.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the leading global enterprise recognized for excellence in facilitating international opportunities,
                fostering sustainable growth, and building bridges that transform lives and businesses worldwide. We
                envision a world where borders are not barriers but gateways to endless possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-white" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all h-full border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Strategic Business Divisions</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Our diverse portfolio of services spans multiple sectors, enabling us to provide comprehensive
              solutions for global success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {divisions.map((division, index) => {
              const Icon = division.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all border border-white/20">
                  <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{division.title}</h3>
                  <p className="text-blue-100">{division.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
