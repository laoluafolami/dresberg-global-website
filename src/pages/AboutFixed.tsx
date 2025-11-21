export default function AboutFixed() {
  const divisions = [
    {
      title: 'E-Commerce',
      description: 'Digital marketplace solutions and online business infrastructure',
      icon: '🛒'
    },
    {
      title: 'Travel & Global Mobility',
      description: 'Destination management and international mobility services',
      icon: '✈️'
    },
    {
      title: 'Learning & Development',
      description: 'Professional training and educational advancement programs',
      icon: '🎓'
    },
    {
      title: 'Agribusiness & Food Processing',
      description: 'Agricultural innovation and food supply chain solutions',
      icon: '🌾'
    },
    {
      title: 'Real Estate & Property',
      description: 'Property development and real estate investment services',
      icon: '🏢'
    },
    {
      title: 'International Trade & Logistics',
      description: 'Global procurement, trade facilitation, and logistics management',
      icon: '📦'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Continuously embracing new ideas and technologies to drive progress and transformation.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'Conducting business with transparency and accountability in all our operations.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'Delivering premium service across all sectors with unwavering quality standards.',
      icon: '🏆'
    },
    {
      title: 'Sustainability',
      description: 'Supporting eco-friendly and long-term development goals for future generations.',
      icon: '🌱'
    },
    {
      title: 'Customer-Centricity',
      description: 'Putting client needs and satisfaction at the center of everything we do.',
      icon: '❤️'
    },
    {
      title: 'Respect',
      description: 'Promoting diversity, inclusion, and mutual growth in all our relationships.',
      icon: '🤗'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Dresberg Global Limited</h1>
            <p className="text-xl text-blue-100">
              A diversified global enterprise headquartered in Abuja, Nigeria, with operations and partnerships across multiple sectors
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-8 text-center">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
              <p className="text-lg leading-relaxed">
                Dresberg Global Limited is a diversified global enterprise headquartered in Abuja, Nigeria, with operations and partnerships across multiple sectors. Our focus is on creating world-class solutions that connect people, enhance business, and drive progress.
              </p>
              <p className="text-lg leading-relaxed">
                As a forward-thinking, multi-industry company, we are committed to excellence across sectors — from Travel, Tourism and Global Mobility to E-Commerce, Agribusiness, Learning and Development, Real Estate, ICT, and International Trade. We deliver reliable, innovative, and customer-centered solutions designed to create sustainable impact and global value.
              </p>
              <p className="text-lg leading-relaxed">
                Our cross-industry synergy leverages innovation across sectors, with customer-focused operations built on trust and transparency. We maintain global standards with deep local understanding, delivering operational excellence that drives measurable results through strategic partnerships that empower transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-10 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                To deliver premium, customer-centric solutions through innovation, excellence, and sustainability. We are committed to creating world-class solutions that connect people, enhance business, and drive progress across all sectors we serve.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-10 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                To be a globally respected, multi-industry brand known for driving innovation, enhancing lives, and creating lasting value. We envision a world where our cross-industry expertise creates sustainable impact and transforms communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">❤️</span>
            </div>
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-blue-100 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-3 hover:scale-105 transform cursor-pointer">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-full flex items-center justify-center mx-auto group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{value.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Our Unique Value Proposition</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              What sets Dresberg Global Limited apart in the global marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Cross-Industry Synergy</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Leveraging innovation across sectors to create comprehensive solutions that address multiple business needs simultaneously.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Customer-Focused Operations</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building operations on trust and transparency, ensuring every client receives personalized attention and tailored solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Global Standards, Local Understanding</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Combining international best practices with deep local market knowledge to deliver culturally relevant solutions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Operational Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Driving measurable results through streamlined processes, quality management, and continuous improvement initiatives.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Strategic Partnerships</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building alliances that empower transformation and create mutual value for all stakeholders involved.
              </p>
            </div>
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
            {divisions.map((division, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/25 transition-all duration-300 border border-white/20 hover:border-white/40 hover:-translate-y-4 hover:scale-105 transform cursor-pointer group hover:shadow-2xl hover:shadow-white/10">
                <div className="w-14 h-14 bg-amber-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-500/30">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{division.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-200 transition-colors duration-300">{division.title}</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors duration-300">{division.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}