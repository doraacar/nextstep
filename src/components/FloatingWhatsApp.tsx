import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905550029000', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsApp}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center z-50 group"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 bg-green-500 rounded-full opacity-20"
      />
    </motion.button>
  );
}
