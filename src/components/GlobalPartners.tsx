import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const partners = [
  { name: 'VFS Global', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=VFS+Global' },
  { name: 'IATA', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=IATA' },
  { name: 'UNWTO', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=UNWTO' },
  { name: 'Schengen', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=Schengen' },
  { name: 'ICAO', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=ICAO' },
  { name: 'Embassy Network', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=Embassy' },
  { name: 'TLS Contact', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=TLS+Contact' },
  { name: 'BLS International', logo: 'https://via.placeholder.com/150x60/CCCCCC/666666?text=BLS' },
];

export default function GlobalPartners() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            {language === 'tr' ? 'Global Partnerlerimiz' : language === 'en' ? 'Our Global Partners' : language === 'ru' ? 'Наши глобальные партнеры' : language === 'fa' ? 'شرکای جهانی ما' : 'شركاؤنا العالميون'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' ? 'Dünya çapında güvenilir kurumlarla işbirliği içindeyiz' : 'We collaborate with trusted institutions worldwide'}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center space-x-12"
          >
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-40 h-20 bg-gray-100 rounded-xl flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-400">{partner.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-[#c5a059] mb-2">50+</div>
            <p className="text-gray-600 font-medium">
              {language === 'tr' ? 'Konsolosluk İşbirliği' : 'Consulate Partnerships'}
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-[#c5a059] mb-2">120+</div>
            <p className="text-gray-600 font-medium">
              {language === 'tr' ? 'Ülke Deneyimi' : 'Country Experience'}
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-4xl font-bold text-[#c5a059] mb-2">15+</div>
            <p className="text-gray-600 font-medium">
              {language === 'tr' ? 'Yıllık Tecrübe' : 'Years of Experience'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
