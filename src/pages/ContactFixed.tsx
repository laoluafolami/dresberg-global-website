import { useState } from 'react';

export default function ContactFixed() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitError('There was an error submitting your message. Please try again or contact us directly via email or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      label: 'Facebook', 
      url: 'https://www.facebook.com/dresbergglobal',
      gradient: 'from-blue-600 to-blue-800'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.875-2.026 1.365-3.323 1.365s-2.448-.49-3.323-1.365c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z"/>
        </svg>
      ), 
      label: 'Instagram', 
      url: 'https://www.instagram.com/dresbergglobal',
      gradient: 'from-pink-500 to-purple-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/dresbergglobal',
      gradient: 'from-blue-700 to-blue-900'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      label: 'Twitter/X', 
      url: 'https://www.twitter.com/dresbergglobal',
      gradient: 'from-blue-400 to-blue-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      label: 'YouTube', 
      url: 'https://www.youtube.com/dresbergglobal',
      gradient: 'from-red-500 to-red-700'
    }
  ];

  return (
    <div className="pt-20 overflow-hidden">
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 6s ease infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-custom {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-slide-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .glass-effect {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-16 overflow-hidden animate-gradient">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-custom">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h1 className="text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                CONTACT US
              </h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              Let's discuss how we can help you achieve your global business objectives
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-x-48 -translate-y-48 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full translate-x-48 translate-y-48 animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="animate-slide-left">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-8 animate-gradient">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="group bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Email</h3>
                      <div className="space-y-1">
                        <a href="mailto:info@dresbergglobal.com" className="block text-blue-100 hover:text-white transition-colors">
                          info@dresbergglobal.com
                        </a>
                        <a href="mailto:support@dresbergglobal.com" className="block text-blue-100 hover:text-white transition-colors">
                          support@dresbergglobal.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Phone</h3>
                      <a href="tel:+2347078998979" className="text-emerald-100 hover:text-white transition-colors">
                        +234 707 899 8979
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">WhatsApp</h3>
                      <p className="text-green-100 mb-3">Chat with us directly for quick responses</p>
                      <button
                        onClick={() => window.open('https://wa.me/2347078998979', '_blank')}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 border border-white/20 hover:border-white/40"
                      >
                        <span>💬</span>
                        Start Chat
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Office Address</h3>
                      <p className="text-orange-100">
                        5, Abubakar Audu Bako Crescent<br />
                        Kado, FCT Abuja<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="glass-effect rounded-2xl p-8 shadow-xl animate-slide-up" style={{animationDelay: '0.3s'}}>
                <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-6">Connect on Social Media</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group w-14 h-14 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-gradient`}
                      aria-label={social.label}
                      title={social.label}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white p-8 rounded-2xl shadow-xl animate-gradient animate-slide-up" style={{animationDelay: '0.5s'}}>
                <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  Working Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span>Monday - Friday</span>
                    <span className="font-semibold text-amber-300">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span>Saturday - Sunday</span>
                    <span className="font-semibold text-gray-300">Closed</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center p-3 bg-amber-500/20 rounded-lg backdrop-blur-sm border border-amber-400/30">
                      <span className="text-amber-200">E-Commerce</span>
                      <span className="font-semibold text-amber-200">Open 9:00 AM - 9:00 PM daily</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-right">
              <div className="glass-effect rounded-2xl p-8 shadow-2xl border border-white/20">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-8 animate-gradient">
                  Send Us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl flex items-start gap-3 animate-slide-up">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-semibold text-lg">Message sent successfully!</p>
                      <p className="text-green-100">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl animate-slide-up">
                    <p>{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all hover:border-blue-300 dark:hover:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all hover:border-blue-300 dark:hover:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white/80 dark:bg-slate-800/80 text-gray-900 dark:text-white backdrop-blur-sm transition-all hover:border-blue-300 dark:hover:border-blue-500"
                      placeholder="Tell us about your inquiry or project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl animate-gradient animate-slide-up"
                    style={{animationDelay: '0.4s'}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl animate-slide-up" style={{animationDelay: '0.6s'}}>
                <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd"/>
                  </svg>
                  Looking for something specific?
                </h3>
                <p className="text-amber-800 dark:text-amber-300 text-sm mb-4">
                  Whether you're interested in our services, partnership opportunities, or have general inquiries,
                  we're here to help. Expect a response within 24-48 hours.
                </p>
                <p className="text-amber-900 dark:text-amber-400 font-semibold text-sm">
                  For urgent matters, please reach us via WhatsApp for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}