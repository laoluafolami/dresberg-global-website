import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Facebook, Instagram, Linkedin, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactFormData } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
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

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your message. Please try again or contact us directly via email or WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Twitter, label: 'Twitter/X', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' }
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Email</h3>
                    <a href="mailto:info@dresbergglobal.com" className="text-gray-600 hover:text-blue-900">
                      info@dresbergglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Chat with us directly for quick responses</p>
                    <button
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                      <MessageCircle size={18} />
                      Start Chat
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Lagos, Nigeria<br />
                      (Full address to be provided)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="font-bold text-blue-900 mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all"
                        aria-label={social.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
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
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">{submitError}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent resize-none"
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
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                <h3 className="font-bold text-amber-900 mb-2">Looking for something specific?</h3>
                <p className="text-amber-800 text-sm mb-4">
                  Whether you're interested in our services, partnership opportunities, or have general inquiries,
                  we're here to help. Expect a response within 24-48 hours.
                </p>
                <p className="text-amber-900 font-semibold text-sm">
                  For urgent matters, please reach us via WhatsApp for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="font-semibold">Map Integration</p>
                  <p className="text-sm">Office location map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
