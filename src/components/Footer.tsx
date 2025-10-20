import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Dresberg.png"
              alt="Dresberg Global Limited"
              className="h-20 w-auto mb-4"
            />
            <p className="text-sm text-gray-300">
              Driving Opportunities Beyond Borders
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-amber-400 transition-colors">
                  Blog & Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>E-Commerce</li>
              <li>Travel & Global Mobility</li>
              <li>Learning & Development</li>
              <li>Agribusiness & Food Processing</li>
              <li>Real Estate & Property</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Stay updated with our latest news and insights.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Dresberg Global Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
