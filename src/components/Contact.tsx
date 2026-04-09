import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905550029000', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:info@nextstepglobal.com';
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0c4a6e] via-[#075985] to-[#0369a1] relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hızlı İletişim
          </h2>
          <p className="text-xl text-white/80">
            Size nasıl yardımcı olabiliriz?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.button
            onClick={handleWhatsApp}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-8 shadow-2xl transition-all duration-300 flex flex-col items-center space-y-4"
          >
            <MessageCircle className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Hemen WhatsApp'tan Ulaşın</h3>
              <p className="text-green-100">Anında yanıt alın</p>
            </div>
          </motion.button>

          <motion.button
            onClick={handleEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-8 shadow-2xl transition-all duration-300 flex flex-col items-center space-y-4"
          >
            <Mail className="w-16 h-16" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Bize Mail Gönderin</h3>
              <p className="text-blue-100">Detaylı bilgi alın</p>
            </div>
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3 text-white">
              <MessageCircle className="w-6 h-6 text-green-400" />
              <div className="text-left">
                <p className="text-sm text-white/60">WhatsApp</p>
                <p className="font-bold">+90 555 002 9000</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <Mail className="w-6 h-6 text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-white/60">E-posta</p>
                <p className="font-bold">info@nextstepglobal.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
