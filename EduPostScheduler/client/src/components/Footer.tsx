import { AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'terms', label: 'Terms' }
  ];

  const handleLinkClick = (linkId: string) => {
    console.log(`Navigate to ${linkId}`);
    onNavigate?.(linkId);
  };

  return (
    <footer 
      className="bg-black border-t border-white/10"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500" />
              <span className="text-white font-bold text-2xl tracking-tight">
                Natural Disaster Alert System
              </span>
            </div>
            
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Protecting communities through real-time disaster alerts, 
              comprehensive safety resources, and emergency preparedness education.
            </p>
            
            <div className="text-white/40 text-sm">
              <p>© 2025 Natural Disaster Alert System</p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">
              Emergency Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">911 (Emergency)</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">alerts@ndas.gov</span>
              </div>
              
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">National Operations Center</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/40 text-sm mb-4 sm:mb-0">
              Designed with care for public safety and disaster preparedness.
            </p>
            
            <div className="flex space-x-6">
              <button 
                onClick={() => handleLinkClick('privacy')}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
                data-testid="footer-privacy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleLinkClick('terms')}
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
                data-testid="footer-terms"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}