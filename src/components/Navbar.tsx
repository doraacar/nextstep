import { useState } from 'react';
import { Menu, X, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Süreç', href: '#process' },
    { name: 'İletişim', href: '#contact' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/905550029000', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@nextstepglobal.com';
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0">
              <img
                src="/nextstep_logo.png"
                alt="NextStep Global Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold leading-tight">
                <span className="text-[#3b9edb]">Next</span><span className="text-[#f5a623]">Step</span>
                <span className="text-gray-500 font-semibold text-sm md:text-base tracking-widest ml-1">GLOBAL</span>
              </h1>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 hover:text-[#0c4a6e] font-medium transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center space-x-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Mail</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleWhatsApp();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  handleEmail();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors shadow-md text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Mail</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
