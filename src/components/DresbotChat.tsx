import { useState, useEffect, useRef } from 'react';
import { ChatStorage, type Message, type UserData, type ChatSession } from '../utils/chatStorage';

interface DresbotChatProps {
  onNavigate?: (page: string) => void;
}

export default function DresbotChat({ onNavigate }: DresbotChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', confirmed: false });
  const [currentFlow, setCurrentFlow] = useState<'intro' | 'email_confirm' | 'main_menu' | 'service'>('intro');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => Date.now().toString());
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initialize new session
      const newSession: ChatSession = {
        sessionId,
        userId: userData.email || 'anonymous',
        userData,
        messages: [],
        startTime: new Date(),
        lastActivity: new Date(),
        status: 'active'
      };
      setCurrentSession(newSession);

      // Check if user has chatted before
      const lastUserData = ChatStorage.getUserData();
      if (lastUserData && lastUserData.name && lastUserData.email) {
        setUserData({ ...lastUserData, confirmed: true });

        // Get user's chat history
        const userHistory = ChatStorage.getUserChatHistory(lastUserData.email);
        const sessionCount = userHistory.length;

        addBotMessage(`Welcome back, ${lastUserData.name}! 👋\n\nI remember you from our previous conversation${sessionCount > 1 ? `s (${sessionCount} total)` : ''}. How can I assist you today?`, [], 500);
        setTimeout(() => showMainMenu(), 2000);
        return;
      }
      startIntroFlow();
    }
  }, [isOpen]);

  const addMessage = (text: string, sender: 'bot' | 'user', options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      options
    };

    setMessages(prev => {
      const updatedMessages = [...prev, newMessage];

      // Update session with new message
      if (currentSession) {
        const updatedSession: ChatSession = {
          ...currentSession,
          messages: updatedMessages,
          lastActivity: new Date(),
          userData: userData
        };
        setCurrentSession(updatedSession);
        ChatStorage.saveChatSession(updatedSession);
      }

      return updatedMessages;
    });
  };

  const addBotMessage = (text: string, options?: string[], delay = 1000) => {
    setIsTyping(true);
    // Simulate realistic typing speed based on message length
    const typingDelay = Math.min(Math.max(text.length * 20, 800), 3000);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, 'bot', options);
    }, delay || typingDelay);
  };

  const startIntroFlow = () => {
    const introMessage = `Hello, my name is Dresbot, and I am the virtual assistant of Dresberg Global Limited. Welcome to Dresberg Global Limited — your trusted partner for Travel, Tourism, Global Mobility, E-Commerce, International Trade, Procurement & Logistics, Learning and Development, and ICT & Innovation services!

Before we begin, may I have your name and email address so I can serve you better and send you a copy of our chat afterward?`;

    addBotMessage(introMessage, [], 500);
  };

  const handleEmailConfirmation = (email: string) => {
    const confirmMessage = `Thanks, ${userData.name}! Just to confirm — is this your correct email address: ${email}?

Please reply 'Yes' if correct, or type the correct one if there's a typo.`;

    addBotMessage(confirmMessage);
    setCurrentFlow('email_confirm');
  };

  const showMainMenu = () => {
    const menuMessage = `Perfect. Let's get started!

Please select the service you'd like to learn about:`;

    const menuOptions = [
      '1. Visa Application',
      '2. Travel, Tourism, Edu-Tourism and Global Mobility',
      '3. E-Commerce and Smart Retail',
      '4. Real Estate Services',
      '5. Agribusiness',
      '6. ICT and Innovation',
      '7. Learning and Development',
      '8. International Trade, Procurement and Logistics',
      '9. Chat with a Human',
      '10. Contact Information',
      '11. Leave Feedback',
      '12. End Chat & Send Summary'
    ];

    addBotMessage(menuMessage, menuOptions);
    setCurrentFlow('main_menu');
  };

  const generateChatSummary = () => {
    const chatSummary = `
DRESBOT CHAT SUMMARY
Session ID: ${sessionId}
Date: ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
User: ${userData.name} (${userData.email})

CONVERSATION TRANSCRIPT:
${messages.map(msg => `[${msg.timestamp.toLocaleTimeString()}] ${msg.sender.toUpperCase()}: ${msg.text}`).join('\n')}

---
Thank you for chatting with Dresbot!
For further assistance, contact us at:
📞 WhatsApp: +234 707 899 8979
📧 Email: support@dresbergglobal.com

Dresberg Global Limited - Your Trusted Global Partner
`;
    return chatSummary;
  };

  const sendChatSummary = () => {
    const summary = generateChatSummary();
    const subject = `Dresbot Chat Summary - ${userData.name}`;
    const body = encodeURIComponent(summary);
    const mailtoLink = `mailto:${userData.email}?subject=${subject}&body=${body}`;

    // Also prepare to send to support team
    const supportSubject = `New Dresbot Chat - ${userData.name}`;
    const supportMailto = `mailto:support@dresbergglobal.com?subject=${supportSubject}&body=${body}`;

    addBotMessage(`Perfect! I'm preparing your chat summary to send to ${userData.email}. 

The summary will also be sent to our support team for follow-up if needed.

Thank you for choosing Dresberg Global Limited! 🌟`);

    // End the session
    if (currentSession) {
      const endedSession: ChatSession = {
        ...currentSession,
        status: 'ended',
        lastActivity: new Date()
      };
      ChatStorage.saveChatSession(endedSession);
    }

    // Open both email links
    setTimeout(() => {
      window.open(mailtoLink, '_blank');
      setTimeout(() => window.open(supportMailto, '_blank'), 1000);
    }, 2000);
  };

  const handleServiceSelection = (option: string) => {
    if (option.includes('Visa Application')) {
      const visaMessage = `With expert guidance, we assist with visa applications, visa consultations, application reviews, and documentation — including for clients with past visa denials. We offer a hybrid model for our visa consultation (Free and Paid Visa Consultation):

**FREE VISA PRE-SCREENING**
Free 10-15 Minutes Visa Eligibility Pre-Screening
Not sure if you qualify for a visa? Start with our quick free pre-screening session.

**PAID VISA CONSULTATION** 
Professional Visa Consultation – Full Advisory and Document Support
Duration: 45 minutes – 1 hour (online or in-person)

Would you like to book a consultation?`;

      addBotMessage(visaMessage, ['Book Free Consultation', 'Book Paid Consultation (₦15,000)', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Travel, Tourism')) {
      const travelMessage = `Discover the world with Dresberg Global Limited — where every journey is designed with purpose.

We curate unforgettable experiences including:
- Family vacations & corporate retreats
- Academic tours & cultural exchanges  
- Edu-Tourism programs across Europe, Caribbean, Africa, Asia
- Citizenship by Investment (CBI) programs
- Residency by Investment (RBI) programs

Would you like to book an Edu-Tourism meeting to learn more?`;

      addBotMessage(travelMessage, ['Yes, Book Meeting', 'Learn about CBI/RBI', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('E-Commerce')) {
      const ecommerceMessage = `Transform your business with our comprehensive E-Commerce solutions:

**SMART RETAIL SOLUTIONS**
- Online store development & management
- Digital payment integration
- Inventory management systems
- Customer relationship management (CRM)
- Multi-channel selling (Website, Social Media, Marketplaces)

**BUSINESS HOURS**
Monday–Sunday: 9:00 AM – 9:00 PM

Ready to digitize your business?`;

      addBotMessage(ecommerceMessage, ['Get E-Commerce Quote', 'Schedule Consultation', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Real Estate')) {
      const realEstateMessage = `Unlock premium real estate opportunities with Dresberg Global Limited:

**OUR SERVICES**
- Property investment consultation
- Real estate portfolio management
- International property acquisition
- Property development partnerships
- Investment advisory services

**FEATURED LOCATIONS**
- Nigeria (Lagos, Abuja, Port Harcourt)
- Dubai, UAE
- London, UK
- Toronto, Canada

Would you like to explore investment opportunities?`;

      addBotMessage(realEstateMessage, ['View Properties', 'Investment Consultation', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Agribusiness')) {
      const agribusinessMessage = `Grow your agricultural ventures with our comprehensive agribusiness solutions:

**OUR EXPERTISE**
- Agricultural investment opportunities
- Farm management consulting
- Supply chain optimization
- Export/import facilitation
- Technology integration in farming
- Sustainable agriculture practices

**FOCUS AREAS**
- Crop production & processing
- Livestock farming
- Aquaculture
- Agro-processing

Ready to cultivate success?`;

      addBotMessage(agribusinessMessage, ['Investment Opportunities', 'Consultation Booking', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('ICT and Innovation')) {
      const ictMessage = `Accelerate your digital transformation with cutting-edge ICT solutions:

**OUR SERVICES**
- Software development & customization
- Cloud infrastructure setup
- Cybersecurity solutions
- Digital transformation consulting
- AI & automation implementation
- IT support & maintenance

**SPECIALIZATIONS**
- Web & mobile app development
- Enterprise software solutions
- Data analytics & business intelligence
- Digital marketing technology

Ready to innovate?`;

      addBotMessage(ictMessage, ['Get Tech Quote', 'Schedule Demo', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Learning and Development')) {
      const learningMessage = `Empower your team with world-class learning and development programs:

**TRAINING PROGRAMS**
- Leadership development
- Professional skills enhancement
- Digital literacy training
- International certification programs
- Corporate training solutions
- Study abroad programs

**DELIVERY METHODS**
- In-person workshops
- Virtual training sessions
- Blended learning approaches
- Self-paced online courses

Invest in your team's growth today!`;

      addBotMessage(learningMessage, ['View Programs', 'Custom Training Quote', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('International Trade')) {
      const tradeMessage = `Expand your global reach with our comprehensive trade and logistics solutions:

**OUR SERVICES**
- Import/export facilitation
- Supply chain management
- Customs clearance assistance
- International procurement
- Logistics coordination
- Trade finance advisory

**GLOBAL NETWORK**
- Africa, Europe, Asia, Americas
- Trusted supplier networks
- Efficient shipping partnerships
- Regulatory compliance support

Ready to go global?`;

      addBotMessage(tradeMessage, ['Trade Consultation', 'Logistics Quote', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Chat with a Human')) {
      const humanMessage = `Would you like to speak directly with a human representative? Please choose your preferred option:`;
      addBotMessage(humanMessage, ['Chat via WhatsApp', 'Send us an Email', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Contact Information')) {
      const contactMessage = `**CONTACT INFORMATION**

📍 Office Address:
5, Abubakar Audu Bako Crescent, Kado, FCT Abuja, Nigeria

⏰ Working Hours:
Monday–Friday: 9:00 AM – 5:00 PM
Saturday and Sunday: Closed
(E-Commerce service: 9:00 AM – 9:00 PM daily)

📞 WhatsApp: +234 707 899 8979
📧 Email: support@dresbergglobal.com

🌐 Connect with us:
LinkedIn | Facebook | Instagram | Twitter | TikTok | YouTube`;

      addBotMessage(contactMessage, ['Chat on WhatsApp', 'Send Email', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else if (option.includes('Leave Feedback')) {
      const feedbackMessage = `We value your feedback! Please share your experience with us:

Your feedback helps us improve our services and better serve our clients.`;

      addBotMessage(feedbackMessage, ['Rate Our Service', 'Send Detailed Feedback', 'Back to Main Menu']);
      setCurrentFlow('service');
    } else {
      // Fallback for any unmatched options - redirect to main menu
      addBotMessage("I'm not sure which service you're looking for. Let me show you our main menu again:", [
        '1. Visa Application',
        '2. Travel, Tourism, Edu-Tourism and Global Mobility',
        '3. E-Commerce and Smart Retail',
        '4. Real Estate Services',
        '5. Agribusiness',
        '6. ICT and Innovation',
        '7. Learning and Development',
        '8. International Trade, Procurement and Logistics',
        '9. Chat with a Human',
        '10. Contact Information',
        '11. Leave Feedback',
        '12. End Chat & Send Summary'
      ]);
    }
  };

  const handleUserInput = (input: string) => {
    addMessage(input, 'user');
    setCurrentInput('');

    if (currentFlow === 'intro') {
      // Parse name and email from input
      const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
      const emailMatch = input.match(emailRegex);

      if (emailMatch) {
        const email = emailMatch[0];
        const name = input.replace(email, '').trim().replace(/[,\s]+/g, ' ').trim();

        setUserData({ name, email, confirmed: false });
        handleEmailConfirmation(email);
      } else {
        addBotMessage("I need both your name and email address. Please provide them in this format: 'John Doe john@email.com'");
      }
    } else if (currentFlow === 'email_confirm') {
      if (input.toLowerCase().includes('yes')) {
        const confirmedUserData = { ...userData, confirmed: true };
        setUserData(confirmedUserData);

        // Save user data for future sessions
        ChatStorage.saveUserData(confirmedUserData);

        // Update current session with confirmed user data
        if (currentSession) {
          const updatedSession = {
            ...currentSession,
            userData: confirmedUserData,
            userId: confirmedUserData.email
          };
          setCurrentSession(updatedSession);
          ChatStorage.saveChatSession(updatedSession);
        }

        showMainMenu();
      } else if (input.includes('@')) {
        setUserData(prev => ({ ...prev, email: input.trim() }));
        handleEmailConfirmation(input.trim());
      } else {
        addBotMessage("Please reply 'Yes' to confirm your email or type the correct email address.");
      }
    } else if (currentFlow === 'main_menu' || currentFlow === 'service') {
      // Handle quick commands
      const lowerInput = input.toLowerCase().trim();

      // Handle numeric inputs (1-12)
      if (lowerInput === '1') {
        handleServiceSelection('1. Visa Application');
      } else if (lowerInput === '2') {
        handleServiceSelection('2. Travel, Tourism, Edu-Tourism and Global Mobility');
      } else if (lowerInput === '3') {
        handleServiceSelection('3. E-Commerce and Smart Retail');
      } else if (lowerInput === '4') {
        handleServiceSelection('4. Real Estate Services');
      } else if (lowerInput === '5') {
        handleServiceSelection('5. Agribusiness');
      } else if (lowerInput === '6') {
        handleServiceSelection('6. ICT and Innovation');
      } else if (lowerInput === '7') {
        handleServiceSelection('7. Learning and Development');
      } else if (lowerInput === '8') {
        handleServiceSelection('8. International Trade, Procurement and Logistics');
      } else if (lowerInput === '9') {
        handleServiceSelection('9. Chat with a Human');
      } else if (lowerInput === '10') {
        handleServiceSelection('10. Contact Information');
      } else if (lowerInput === '11') {
        handleServiceSelection('11. Leave Feedback');
      } else if (lowerInput === '12') {
        handleOptionClick('End Chat & Send Summary');
      } else if (lowerInput.includes('menu') || lowerInput.includes('main')) {
        showMainMenu();
      } else if (lowerInput.includes('whatsapp') || lowerInput.includes('chat')) {
        addBotMessage("Great! You can chat with our representative instantly on WhatsApp: https://wa.me/2347078998979");
        window.open('https://wa.me/2347078998979', '_blank');
      } else if (lowerInput.includes('email') || lowerInput.includes('contact')) {
        addBotMessage("You can reach our customer support team at: support@dresbergglobal.com\n\nPlease include your full name, contact number, and details of your inquiry. Our team will respond within 24 hours.");
      } else if (lowerInput.includes('visa')) {
        handleServiceSelection('1. Visa Application');
      } else if (lowerInput.includes('travel') || lowerInput.includes('tourism')) {
        handleServiceSelection('2. Travel, Tourism, Edu-Tourism and Global Mobility');
      } else if (lowerInput.includes('ecommerce') || lowerInput.includes('e-commerce')) {
        handleServiceSelection('3. E-Commerce and Smart Retail');
      } else if (lowerInput.includes('real estate') || lowerInput.includes('property')) {
        handleServiceSelection('4. Real Estate Services');
      } else if (lowerInput.includes('agri') || lowerInput.includes('farm')) {
        handleServiceSelection('5. Agribusiness');
      } else if (lowerInput.includes('ict') || lowerInput.includes('tech') || lowerInput.includes('software')) {
        handleServiceSelection('6. ICT and Innovation');
      } else if (lowerInput.includes('learning') || lowerInput.includes('training')) {
        handleServiceSelection('7. Learning and Development');
      } else if (lowerInput.includes('trade') || lowerInput.includes('logistics')) {
        handleServiceSelection('8. International Trade, Procurement and Logistics');
      } else if (lowerInput.includes('end') || lowerInput.includes('summary') || lowerInput.includes('finish')) {
        handleOptionClick('End Chat & Send Summary');
      } else {
        addBotMessage("I understand you're looking for something specific. You can:\n\n• Type a number (1-12) for quick service selection\n• Use the menu buttons above\n• Type keywords like 'visa', 'travel', 'ecommerce'\n• Type 'menu' to see all options again");
      }
    }
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, 'user');

    if (currentFlow === 'main_menu') {
      handleServiceSelection(option);
    } else if (option === 'Back to Main Menu') {
      showMainMenu();
    } else if (option === 'Chat via WhatsApp') {
      addBotMessage("Great! You can chat with our representative instantly on WhatsApp: https://wa.me/2347078998979");
      window.open('https://wa.me/2347078998979', '_blank');
    } else if (option === 'Send us an Email' || option === 'Send Email') {
      addBotMessage("You can reach our customer support team at: support@dresbergglobal.com\n\nPlease include your full name, contact number, and details of your inquiry. Our team will respond within 24 hours.");
    } else if (option.includes('Book Free Consultation')) {
      addBotMessage("Perfect! I'll take you to our Contact page where you can schedule your free consultation with our visa experts.");
      if (onNavigate) {
        setTimeout(() => {
          onNavigate('contact');
          setIsOpen(false); // Close the chat when navigating
        }, 2000);
      }
    } else if (option.includes('Book Paid Consultation')) {
      addBotMessage("You can book securely via Selar here: https://selar.com/776j679167 (₦15,000 consultation fee applies).");
      window.open('https://selar.com/776j679167', '_blank');
    } else if (option.includes('Yes, Book Meeting')) {
      addBotMessage("Excellent! Please contact us via WhatsApp (+234 707 899 8979) or email (support@dresbergglobal.com) to schedule your Edu-Tourism consultation. Our team will discuss destinations, programs, and create a customized itinerary for you.");
    } else if (option.includes('Learn about CBI/RBI')) {
      addBotMessage("Our Citizenship by Investment (CBI) and Residency by Investment (RBI) programs offer pathways to second citizenship or residency in countries like Portugal, Malta, Cyprus, and Caribbean nations. Contact our immigration specialists for detailed consultation: support@dresbergglobal.com");
    } else if (option.includes('Get E-Commerce Quote') || option.includes('Get Tech Quote')) {
      addBotMessage("Perfect! Please send us your project requirements via email at support@dresbergglobal.com or WhatsApp (+234 707 899 8979). Include details about your business, current setup, and goals. We'll provide a customized quote within 24 hours.");
    } else if (option.includes('Schedule Consultation') || option.includes('Schedule Demo')) {
      addBotMessage("Great choice! Our consultation sessions help us understand your needs better. Please contact us via:\n\n📞 WhatsApp: +234 707 899 8979\n📧 Email: support@dresbergglobal.com\n\nMention 'Dresbot Consultation' and we'll prioritize your request.");
    } else if (option.includes('View Properties') || option.includes('Investment Consultation')) {
      addBotMessage("Our real estate portfolio includes premium properties across Nigeria, Dubai, London, and Toronto. For detailed property listings and investment opportunities, please contact our real estate team at support@dresbergglobal.com or WhatsApp +234 707 899 8979.");
    } else if (option.includes('Investment Opportunities') || option.includes('Consultation Booking')) {
      addBotMessage("Our agribusiness investment opportunities span across crop production, livestock, aquaculture, and agro-processing. For detailed investment packages and consultation, contact us at support@dresbergglobal.com or WhatsApp +234 707 899 8979.");
    } else if (option.includes('View Programs') || option.includes('Custom Training Quote')) {
      addBotMessage("Our learning programs are designed to enhance professional skills and leadership capabilities. For program catalogs and custom training solutions, contact our L&D team at support@dresbergglobal.com or WhatsApp +234 707 899 8979.");
    } else if (option.includes('Trade Consultation') || option.includes('Logistics Quote')) {
      addBotMessage("Our international trade experts can help you navigate global markets efficiently. For trade consultation and logistics quotes, contact us at support@dresbergglobal.com or WhatsApp +234 707 899 8979. Please include details about your products and target markets.");
    } else if (option.includes('Rate Our Service')) {
      addBotMessage("Thank you for choosing to rate our service! Please rate your experience from 1-5 stars and share any comments. You can send your rating via email to support@dresbergglobal.com or WhatsApp +234 707 899 8979.");
    } else if (option.includes('Send Detailed Feedback')) {
      addBotMessage("We appreciate your detailed feedback! Please share your experience, suggestions, or concerns via:\n\n📧 Email: support@dresbergglobal.com\n📞 WhatsApp: +234 707 899 8979\n\nYour feedback helps us serve you better!");
    } else if (option.includes('Chat on WhatsApp')) {
      addBotMessage("Great! You can chat with our representative instantly on WhatsApp: https://wa.me/2347078998979");
      window.open('https://wa.me/2347078998979', '_blank');
    } else if (option.includes('End Chat & Send Summary')) {
      if (userData.confirmed) {
        sendChatSummary();
      } else {
        addBotMessage("To send you a chat summary, I'll need your email address first. Please provide your name and email in this format: 'John Doe john@email.com'");
        setCurrentFlow('intro');
      }
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .3 0 .5-.1L12 19h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col z-50 md:w-96">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">D</span>
                </div>
                <div>
                  <h3 className="font-bold">Dresbot</h3>
                  <p className="text-xs text-blue-100">Dresberg Global Assistant</p>
                </div>
              </div>
              {userData.confirmed && (
                <div className="flex gap-2">
                  <button
                    onClick={() => showMainMenu()}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    title="Main Menu"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/2347078998979', '_blank')}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    title="WhatsApp"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${message.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                  }`}>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && currentInput.trim() && handleUserInput(currentInput.trim())}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
              />
              <button
                onClick={() => currentInput.trim() && handleUserInput(currentInput.trim())}
                disabled={!currentInput.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}