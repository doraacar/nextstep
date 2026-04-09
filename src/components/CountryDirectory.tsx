import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import CountryModal from './CountryModal';

const countries = [
  {
    name: { tr: 'Amerika Birleşik Devletleri', en: 'United States', ru: 'США', fa: 'ایالات متحده', ar: 'الولايات المتحدة' },
    flag: '🇺🇸',
    status: 'high',
    image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: { tr: 'Birleşik Krallık', en: 'United Kingdom', ru: 'Великобритания', fa: 'بریتانیا', ar: 'المملكة المتحدة' },
    flag: '🇬🇧',
    status: 'fast',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: { tr: 'Almanya', en: 'Germany', ru: 'Германия', fa: 'آلمان', ar: 'ألمانيا' },
    flag: '🇩🇪',
    status: 'easy',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: { tr: 'Fransa', en: 'France', ru: 'Франция', fa: 'فرانسه', ar: 'فرنسا' },
    flag: '🇫🇷',
    status: 'high',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: { tr: 'Kanada', en: 'Canada', ru: 'Канада', fa: 'کانادا', ar: 'كندا' },
    flag: '🇨🇦',
    status: 'fast',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: { tr: 'Avustralya', en: 'Australia', ru: 'Австралия', fa: 'استرالیا', ar: 'أستراليا' },
    flag: '🇦🇺',
    status: 'easy',
    image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function CountryDirectory() {
  const { t, language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<typeof countries[0] | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'high': return <TrendingUp className="w-4 h-4" />;
      case 'fast': return <Clock className="w-4 h-4" />;
      case 'easy': return <CheckCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high': return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'fast': return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'easy': return 'bg-purple-500/10 text-purple-600 border-purple-500/20';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            {t('countries.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('countries.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 text-4xl">
                  {country.flag}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${getStatusColor(country.status)}`}>
                    {getStatusIcon(country.status)}
                    <span>{t(`countries.status.${country.status}`)}</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4 group-hover:text-[#c5a059] transition-colors">
                  {country.name[language]}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                    <span>Başvuru süresi: 3-5 gün</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                    <span>Online başvuru</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#c5a059]" />
                    <span>Profesyonel destek</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCountry(country)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium flex items-center justify-center space-x-2 group-hover:from-[#c5a059] group-hover:to-[#d4af6a]"
                >
                  <span>{t('countries.button')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CountryModal
        isOpen={!!selectedCountry}
        onClose={() => setSelectedCountry(null)}
        country={selectedCountry}
      />
    </section>
  );
}
