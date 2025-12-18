interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export default function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to Dresberg Global Limited. By accessing or using our website (www.dresbergglobal.com) or our services, you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree, you must refrain from using the website or our services."
    },
    {
      title: "Our Services",
      content: "Dresberg Global Limited provides services across sectors including Travel, Tourism, Destination Management, Global Mobility, E-Commerce, Agribusiness, Real Estate, Trade, Logistics, Procurement, Learning and Development, ICT & Innovation. Additional terms may apply for specific services, which will be provided separately."
    },
    {
      title: "User Obligations",
      content: "You agree to:",
      list: [
        "Provide accurate, up-to-date information when registering or using our services",
        "Comply with all applicable laws and regulations",
        "Not use our website or services for unlawful activities, infringing rights or fraud",
        "Not interfere with the security or proper operation of our services"
      ]
    },
    {
      title: "Service Orders, Payment & Refunds",
      content: "When you purchase a service (e.g., visa consultation via Selar), you agree to pay the applicable fee. Refunds, cancellations and service-specific terms will be governed by a separate policy or agreement."
    },
    {
      title: "Intellectual Property",
      content: "All content on the website, including graphics, logos, text, design, is owned or licensed by Dresberg Global Limited. You may not reproduce, distribute, or create derivative works without our prior written permission."
    },
    {
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by law, Dresberg Global Limited and its officers will not be liable for any indirect, incidental, special or consequential damages arising from use of the website or services. Our liability for direct damages is limited to the amount you paid for the service in question."
    },
    {
      title: "Indemnification",
      content: "You agree to indemnify and hold harmless Dresberg Global Limited from any claims or liabilities arising from your breach of these Terms or misuse of our website or services."
    },
    {
      title: "Governing Law and Jurisdiction",
      content: "These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising under or in connection with these Terms shall be subject to the non-exclusive jurisdiction of the courts of Abuja, Nigeria."
    },
    {
      title: "Amendments",
      content: "We may update these Terms from time to time. We will post the revised version online and indicate the date of change. Continued use of the website constitutes acceptance of the revised Terms."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our website and services.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header Info */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 mb-8 border border-emerald-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service Agreement</h2>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
                              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
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

            {/* Important Notice */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700 rounded-3xl p-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-3">Important Notice</h3>
                  <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our services immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-3xl shadow-xl p-8 mt-12 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                <p className="text-emerald-100 mb-6">
                  For queries relating to these Terms, please contact us:
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-md mx-auto mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>info@dresbergglobal.com</span>
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