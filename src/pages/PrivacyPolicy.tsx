interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const sections = [
    {
      title: "Scope",
      content: "This Policy applies to all personal data processed by Dresberg Global Limited in Nigeria and internationally, including via our website, mobile applications, physical offices, and all service-touchpoints."
    },
    {
      title: "Legal Basis and Governing Law",
      content: "We process personal data in accordance with applicable laws, including the Nigeria Data Protection Act 2023, the Nigeria Data Protection Commission's regulations and directives, and relevant international data protection standards (such as the EU GDPR where applicable)."
    },
    {
      title: "Data We Collect",
      content: "",
      list: [
        "Contact details: name, email address, telephone number, postal address",
        "Identification and verification data (where required for services)",
        "Service usage data: login and transactional history, service preferences",
        "Device and online identifiers: IP address, browser type, cookies (see Cookie Policy)",
        "Other data you voluntarily provide, for example through our chatbot, forms or consultations"
      ]
    },
    {
      title: "How We Use Your Data",
      content: "We may use your personal data for:",
      list: [
        "Providing and managing our services (e.g., visa consultation, travel services, e-commerce)",
        "Customer support and communications",
        "Marketing and promotional offers (with your consent)",
        "Compliance with legal or regulatory obligations",
        "Analytics, service improvement and research",
        "Protecting our rights, safety, and property"
      ]
    },
    {
      title: "Lawful Bases for Processing",
      content: "We rely on one or more of the following bases:",
      list: [
        "Your consent (which you may withdraw at any time)",
        "Performance of a contract with you",
        "Compliance with a legal obligation",
        "Legitimate interests (provided your rights are not overridden)"
      ]
    },
    {
      title: "Disclosure of Your Data",
      content: "We may share personal data with:",
      list: [
        "Affiliated companies, service providers, partners, and subcontractors for the purposes above",
        "Third-parties in the event of a merger, acquisition or sale of assets",
        "Legal, regulatory or law-enforcement bodies as required by law",
        "When transferring data outside Nigeria we ensure appropriate safeguards are in place"
      ]
    },
    {
      title: "Your Rights",
      content: "Subject to applicable law, you have the right to:",
      list: [
        "Access your personal data",
        "Correct inaccurate or incomplete data",
        "Request erasure of your data (\"right to be forgotten\")",
        "Request restriction of processing",
        "Object to processing, including for direct marketing",
        "Receive data in machine-readable form and/or transmit it to another controller",
        "Lodge a complaint with our Data Protection Officer or the NDPC"
      ]
    },
    {
      title: "Data Retention",
      content: "We retain your personal data only as long as necessary for the purposes for which it was collected, or as required by law. Once no longer required we securely delete or anonymize it."
    },
    {
      title: "Security",
      content: "We implement appropriate technical, organizational and physical measures to protect your personal data. However, no system is completely secure — we cannot guarantee absolute security."
    },
    {
      title: "Links to Other Websites",
      content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies."
    },
    {
      title: "Changes to this Policy",
      content: "We may update this Policy from time to time. We will post the updated Policy on our website and indicate the effective date."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-48 translate-y-48"></div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V5l-9-4z"/>
                </svg>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 mb-8 border border-blue-100 dark:border-slate-700">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Commitment to Privacy</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dresberg Global Limited ("we", "us", "our") is committed to protecting the privacy and personal data of our clients, website visitors, partners and stakeholders. This Privacy Policy explains how we collect, use, disclose, store and protect your personal data when you use our website, our services, or otherwise interact with us.
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
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
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
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

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-xl p-8 mt-12 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <p className="text-blue-100 mb-6">
                  If you have questions or wish to exercise your rights, contact:
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-md mx-auto">
                  <div className="space-y-3">
                    <div>
                      <strong>DPO / Privacy Officer</strong><br />
                      Dresberg Global Limited
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>support@dresbergglobal.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span>5, Abubakar Audu Bako Crescent, Kado, FCT Abuja, Nigeria</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="mt-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/40"
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