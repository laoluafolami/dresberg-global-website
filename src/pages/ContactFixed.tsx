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
      hoverColor: 'hover:bg-blue-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.875-2.026 1.365-3.323 1.365s-2.448-.49-3.323-1.365c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z"/>
        </svg>
      ), 
      label: 'Instagram', 
      url: 'https://www.instagram.com/dresbergglobal',
      hoverColor: 'hover:bg-pink-600'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/dresbergglobal',
      hoverColor: 'hover:bg-blue-700'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ), 
      label: 'Twitter/X', 
      url: 'https://www.twitter.com/dresbergglobal',
      hoverColor: 'hover:bg-blue-400'
    },
    { 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      label: 'YouTube', 
      url: 'https://www.youtube.com/dresbergglobal',
      hoverColor: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Let's discuss how we can help you achieve your global business objectives
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-white mb-1">Email</h3>
                    <a href="mailto:info@dresbergglobal.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400">
                      info@dresbergglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Chat with us directly for quick responses</p>
                    <button
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                      <span>💬</span>
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-white mb-1">Office Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Central Business District<br />
                      Abuja, Federal Capital Territory<br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-blue-900 dark:text-white mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 ${social.hoverColor} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-xl">
                <h3 className="font-bold text-xl mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-green-800 dark:text-green-400 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 dark:text-green-300 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-400">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-blue-900 dark:text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                      placeholder="Tell us about your inquiry or project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <span>📤</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                <h3 className="font-bold text-amber-900 dark:text-amber-400 mb-2">Looking for something specific?</h3>
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

      <section className="py-12 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-4">Our Location</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Visit us at our office in Abuja, Federal Capital Territory, Nigeria
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="bg-gray-200 dark:bg-slate-700 rounded-xl overflow-hidden h-96 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126170.38317718383!2d7.398478!3d9.0579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dresberg Global Limited Office Location - Abuja, Nigeria"
                  />
                </div>
              </div>
              
              {/* Location Details */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Head Office</h3>
                      <p className="text-blue-100 mb-2">
                        Central Business District<br />
                        Abuja, Federal Capital Territory<br />
                        Nigeria
                      </p>
                      <p className="text-blue-200 text-sm">
                        📍 Coordinates: 9.0579° N, 7.4951° E
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
                  <h4 className="font-bold text-blue-900 dark:text-white mb-4">Getting Here</h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">✈️</span>
                      <div>
                        <p className="font-medium">By Air</p>
                        <p>Nnamdi Azikiwe International Airport (ABV) - 45 minutes drive</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🚗</span>
                      <div>
                        <p className="font-medium">By Road</p>
                        <p>Accessible via major highways from Lagos, Kano, and Port Harcourt</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">🚌</span>
                      <div>
                        <p className="font-medium">Public Transport</p>
                        <p>BRT and taxi services available throughout the city</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-900 dark:text-green-400 mb-3">Visit Us</h4>
                  <p className="text-green-800 dark:text-green-300 text-sm mb-4">
                    Schedule an appointment for personalized consultation and business discussions.
                  </p>
                  <button
                    onClick={() => window.open('https://wa.me/1234567890?text=Hello, I would like to schedule a visit to your Abuja office', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2 text-sm"
                  >
                    <span>📅</span>
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="font-bold text-blue-900 dark:text-white mb-2">Modern Facilities</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  State-of-the-art office space in the heart of Nigeria's capital
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🅿️</span>
                </div>
                <h4 className="font-bold text-blue-900 dark:text-white mb-2">Parking Available</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Secure parking facilities for visitors and clients
                </p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="font-bold text-blue-900 dark:text-white mb-2">Strategic Location</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Prime location with easy access to government and business districts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}