interface CookiePolicyProps {
  onNavigate: (page: string) => void;
}

export default function CookiePolicy({ onNavigate }: CookiePolicyProps) {
  const sections = [
    {
      title: "Introduction",
      content: "This Cookie Policy describes how Dresberg Global Limited (\"we\", \"us\") uses cookies and similar technologies on our website to recognize you when you visit, understand how you use our site, and improve your browsing experience."
    },
    {
      title: "What Are Cookies",
      content: "Cookies are small text files placed on your device by websites. They allow websites to remember your visits and preferences. Similar technologies include web beacons, local storage and session identifiers."
    },
    {
      title: "How We Use Cookies",
      content: "We use cookies for the following purposes:",
      list: [
        "Essential cookies – necessary for site operation (login, security, navigation)",
        "Performance and analytics cookies – to measure traffic and usage to improve our site",
        "Functional cookies – to remember preferences and personalize your experience",
        "Marketing/advertising cookies – to deliver relevant offers and enable third-party advertising"
      ]
    },
    {
      title: "Your Cookie Choices",
      content: "When you first visit our website you will be presented with a cookie banner asking your consent. You may accept or reject non‐essential cookies. You can also manage cookie settings via your browser. Please note: blocking some cookies may affect site functionality."
    },
    {
      title: "Third-Party Cookies",
      content: "We may allow third-party cookies from analytics or advertising partners. These third parties may track your device across other sites and build profiles for advertising or analytics."
    },
    {
      title: "Compliance with Law",
      content: "In compliance with Nigerian data protection law and guidance from the Nigeria Data Protection Commission, we obtain clear, informed and freely given consent for non-essential cookies."
    },
    {
      title: "Changes to Cookie Policy",
      content: "We may update this Cookie Policy as our practices or legal obligations change. We will publish the new version on our website with an updated effective date."
    }
  ];

  const cookieTypes = [
    {
      type: "Essential Cookies",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
        </svg>
      ),
      gradient: "from-red-500 to-pink-600",
      description: "Required for basic website functionality, security, and navigation. These cannot be disabled.",
      examples: ["Login sessions", "Security tokens", "Site navigation", "Form submissions"]
    },
    {
      type: "Performance Cookies",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-600",
      description: "Help us understand how visitors interact with our website by collecting anonymous information.",
      examples: ["Page views", "Traffic sources", "User behavior", "Site performance"]
    },
    {
      type: "Functional Cookies",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-600",
      description: "Remember your preferences and settings to provide a personalized experience.",
      examples: ["Language preferences", "Theme settings", "Location data", "Saved preferences"]
    },
    {
      type: "Marketing Cookies",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-purple-500 to-indigo-600",
      description: "Track your activity across websites to deliver relevant advertisements and offers.",
      examples: ["Ad targeting", "Social media integration", "Marketing campaigns", "Conversion tracking"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-orange-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-orange-100 to-yellow-100 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Learn how we use cookies and similar technologies to enhance your browsing experience.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Types of Cookies We Use</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Understanding the different types of cookies and how they enhance your experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className={`bg-gradient-to-br ${cookie.gradient} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {cookie.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{cookie.type}</h3>
                  </div>
                  <p className="text-white/90 mb-6 leading-relaxed">{cookie.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white/90 mb-3">Examples:</h4>
                    {cookie.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                        <span className="text-white/80 text-sm">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Info */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 mb-8 border border-orange-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cookie Policy Details</h2>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p><strong>Effective Date:</strong> [Date when website goes live]</p>
                    <p><strong>Version:</strong> 1.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{section.title}</h3>
                      {section.content && (
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{section.content}</p>
                      )}
                      {section.list && (
                        <ul className="space-y-3">
                          {section.list.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cookie Management */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-700 rounded-3xl p-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">Manage Your Cookie Preferences</h3>
                  <p className="text-blue-800 dark:text-blue-200 leading-relaxed mb-4">
                    You have control over which cookies we use. You can manage your preferences through your browser settings or by using our cookie consent banner when you first visit our site.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Cookie Settings
                    </button>
                    <button className="bg-white hover:bg-gray-50 text-blue-600 px-4 py-2 rounded-lg font-medium border border-blue-200 transition-colors">
                      Browser Help
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-orange-600 to-yellow-700 rounded-3xl shadow-xl p-8 mt-12 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
                <p className="text-orange-100 mb-6">
                  If you have questions about this Cookie Policy, please contact:
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-md mx-auto mb-6">
                  <div className="space-y-3">
                    <div>
                      <strong>DPO - Dresberg Global Limited</strong>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>support@dresbergglobal.com</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}