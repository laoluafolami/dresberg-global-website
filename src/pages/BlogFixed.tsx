import { useState } from 'react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

export default function BlogFixed({ onNavigate }: BlogProps) {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setSubscriptionStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    setSubscriptionStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call - replace with your actual newsletter service
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the email to your newsletter service
      // Example: await fetch('/api/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      console.log('Newsletter subscription:', { email, timestamp: new Date().toISOString() });
      
      setSubscriptionStatus('success');
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubscriptionStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubscriptionStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const categories = [
    { id: 'mobility', name: 'Global Mobility Insights', icon: '✈️', color: 'blue' },
    { id: 'tourism', name: 'Tourism Frontiers Africa', icon: '🌍', color: 'green' },
    { id: 'education', name: 'Education and Development', icon: '🎓', color: 'amber' },
    { id: 'business', name: 'Business and Trade Updates', icon: '💼', color: 'purple' }
  ];

  const posts = [
    {
      id: 1,
      title: 'Navigating Global Mobility: Essential Tips for International Professionals',
      excerpt: 'Discover the key strategies and considerations when planning your international career move. From visa requirements to cultural adaptation, we cover everything you need to know.',
      category: 'Global Mobility Insights',
      author: 'Dresberg Global Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'The Rise of Educational Tourism in Africa: Opportunities and Trends',
      excerpt: 'Educational tourism is transforming how students experience learning abroad. Explore the growing trends in EduTourism across the African continent and the opportunities it presents.',
      category: 'Tourism Frontiers Africa',
      author: 'Dresberg Global Team',
      date: 'March 10, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Building Global Competence: Why Cross-Cultural Skills Matter',
      excerpt: 'In today\'s interconnected world, cross-cultural competence is essential for professional success. Learn how to develop these critical skills for your global career.',
      category: 'Education and Development',
      author: 'Dresberg Global Team',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'E-Commerce Expansion: Strategies for Breaking into International Markets',
      excerpt: 'Looking to expand your e-commerce business globally? Discover proven strategies for successful international market entry and sustainable growth.',
      category: 'Business and Trade Updates',
      author: 'Dresberg Global Team',
      date: 'February 28, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Study Abroad Success Stories: Real Experiences from International Students',
      excerpt: 'Hear directly from students who have successfully navigated their study abroad journey. Their insights and experiences can help you prepare for your own adventure.',
      category: 'Education and Development',
      author: 'Dresberg Global Team',
      date: 'February 20, 2024',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Understanding Visa Requirements for Work and Study Programs',
      excerpt: 'A comprehensive guide to visa requirements, application processes, and essential documentation for international work and study opportunities.',
      category: 'Global Mobility Insights',
      author: 'Dresberg Global Team',
      date: 'February 15, 2024',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl text-blue-100">
              Expert perspectives on global mobility, education, business, and international opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-slate-900 border-b dark:border-slate-700 transition-colors">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 bg-gradient-to-r from-blue-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-blue-200 dark:border-slate-600 text-blue-900 dark:text-white hover:border-blue-400 dark:hover:border-slate-500"
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-900 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-blue-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span>👤</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="text-blue-900 dark:text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Looking for more insights and articles? Connect with us on LinkedIn for regular updates.
            </p>
            <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
              Follow Us on LinkedIn
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl mb-6 block">📈</span>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter to receive the latest insights, updates, and opportunities directly in your inbox.
            </p>
            
            {/* Success Message */}
            {subscriptionStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg flex items-center justify-center gap-3 max-w-md mx-auto">
                <span className="text-2xl">✅</span>
                <div className="text-left">
                  <p className="font-semibold text-green-200">Successfully subscribed!</p>
                  <p className="text-green-300 text-sm">Thank you for joining our newsletter.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {subscriptionStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg max-w-md mx-auto">
                <p className="text-red-200 font-semibold">⚠️ {errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={isSubscribing}
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button 
                type="submit"
                disabled={isSubscribing || !email}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap flex items-center justify-center gap-2 min-w-[120px]"
              >
                {isSubscribing ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    Subscribe
                  </>
                )}
              </button>
            </form>

            <p className="text-blue-200 text-sm mt-4 max-w-md mx-auto">
              📊 Join 500+ professionals who receive our weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">Have Questions?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team is ready to answer your questions and help you navigate your global opportunities.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}