import { useState } from 'react';

interface CareersProps {
  onNavigate: (page: string) => void;
}

export default function CareersFixed({ onNavigate }: CareersProps) {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const departments = [
    { id: 'all', name: 'All Positions', icon: '🌟' },
    { id: 'business', name: 'Business Development', icon: '💼' },
    { id: 'travel', name: 'Travel & Tourism', icon: '✈️' },
    { id: 'education', name: 'Education Services', icon: '🎓' },
    { id: 'tech', name: 'Technology', icon: '💻' },
    { id: 'operations', name: 'Operations', icon: '⚙️' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Business Development Manager',
      department: 'business',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₦300,000 - ₦500,000',
      description: 'Lead business development initiatives and expand our global partnerships.',
      requirements: [
        'Bachelor\'s degree in Business Administration or related field',
        '3+ years of business development experience',
        'Strong communication and negotiation skills',
        'Experience in international business preferred'
      ],
      posted: '2024-03-15'
    },
    {
      id: 2,
      title: 'Travel Consultant',
      department: 'travel',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₦200,000 - ₦350,000',
      description: 'Provide expert travel consultation and manage client travel arrangements.',
      requirements: [
        'Diploma/Degree in Tourism, Hospitality or related field',
        '2+ years in travel industry',
        'Knowledge of visa requirements and travel regulations',
        'Excellent customer service skills'
      ],
      posted: '2024-03-10'
    },
    {
      id: 3,
      title: 'Education Program Coordinator',
      department: 'education',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '₦250,000 - ₦400,000',
      description: 'Coordinate educational programs and manage student placement services.',
      requirements: [
        'Bachelor\'s degree in Education or related field',
        '2+ years in educational services',
        'Strong organizational and communication skills',
        'Experience with international education programs'
      ],
      posted: '2024-03-08'
    },
    {
      id: 4,
      title: 'Frontend Developer',
      department: 'tech',
      location: 'Abuja, Nigeria / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₦400,000 - ₦600,000',
      description: 'Develop and maintain modern web applications using React and TypeScript.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2+ years of React/TypeScript experience',
        'Experience with modern web technologies',
        'Strong problem-solving skills'
      ],
      posted: '2024-03-05'
    },
    {
      id: 5,
      title: 'Operations Assistant',
      department: 'operations',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₦150,000 - ₦250,000',
      description: 'Support daily operations and assist with administrative tasks.',
      requirements: [
        'Bachelor\'s degree or equivalent experience',
        '1+ years of administrative experience',
        'Proficiency in Microsoft Office Suite',
        'Strong attention to detail'
      ],
      posted: '2024-03-01'
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'business',
      location: 'Abuja, Nigeria',
      type: 'Full-time',
      experience: '2-3 years',
      salary: '₦250,000 - ₦400,000',
      description: 'Develop and execute marketing strategies to promote our global services.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '2+ years of marketing experience',
        'Digital marketing skills preferred',
        'Creative thinking and analytical skills'
      ],
      posted: '2024-02-28'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Market-competitive compensation packages with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health insurance coverage for you and your family'
    },
    {
      icon: '🌴',
      title: 'Paid Time Off',
      description: 'Generous vacation days, sick leave, and public holidays'
    },
    {
      icon: '📚',
      title: 'Professional Development',
      description: 'Training opportunities, conferences, and skill development programs'
    },
    {
      icon: '🌍',
      title: 'Global Opportunities',
      description: 'International assignments and cross-cultural work experiences'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and supportive work environment'
    }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitSuccess(true);
      setApplicationForm({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Application submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm({
        ...applicationForm,
        resume: e.target.files[0]
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Join Our Global Team</h1>
            <p className="text-xl text-blue-100 mb-8">
              Build your career with Dresberg Global Limited and help us connect opportunities across the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
              >
                View Open Positions
              </button>
              <button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join a dynamic team that's passionate about creating global opportunities and making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-slate-600 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="job-openings" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore exciting career opportunities across our various departments
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${selectedDepartment === dept.id
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-blue-900 dark:text-white border-2 border-blue-200 dark:border-slate-600 hover:border-blue-400 dark:hover:border-slate-500'
                  }`}
              >
                <span className="text-xl">{dept.icon}</span>
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-slate-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-slate-700"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-400 px-3 py-1 rounded-full">
                          📍 {job.location}
                        </span>
                        <span className="text-sm bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-400 px-3 py-1 rounded-full">
                          💼 {job.type}
                        </span>
                        <span className="text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400 px-3 py-1 rounded-full">
                          ⏱️ {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-blue-900 dark:text-white mb-2">Requirements:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {job.requirements.slice(0, 2).map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                      {job.requirements.length > 2 && (
                        <li className="text-blue-600 dark:text-blue-400 text-sm">
                          +{job.requirements.length - 2} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {job.salary}
                    </div>
                    <button
                      onClick={() => {
                        setApplicationForm({ ...applicationForm, position: job.title });
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300 mb-2">No positions found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try selecting a different department or check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-4">Apply for a Position</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ready to join our team? Submit your application and we'll get back to you soon.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start gap-4">
                <span className="text-3xl">✅</span>
                <div>
                  <h3 className="text-green-800 dark:text-green-400 font-bold text-lg mb-2">Application Submitted!</h3>
                  <p className="text-green-700 dark:text-green-300">
                    Thank you for your interest in joining Dresberg Global Limited. We'll review your application and get back to you within 5-7 business days.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleApplicationSubmit} className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Position Applied For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={applicationForm.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="experience" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={applicationForm.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years (Entry Level)</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years (Senior Level)</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="resume" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white dark:bg-slate-700 text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-900 file:text-white file:cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={applicationForm.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit for our team..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    Submit Application
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our HR team is here to help you with any questions about career opportunities at Dresberg Global Limited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('mailto:careers@dresbergglobal.com', '_blank')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>📧</span>
                Email HR Team
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/30 transition-all hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}