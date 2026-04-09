import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Vize randevusu ne kadar sürede çıkar?',
    answer: 'Vize randevusu süresi ülkeye ve konsolosluğa göre değişmektedir. Ortalama olarak 3-7 iş günü içinde randevu alınabilmektedir. Premium hizmetimiz ile daha hızlı randevu imkanı sunuyoruz.',
  },
  {
    id: 2,
    question: 'Gerekli evraklar nelerdir?',
    answer: 'Temel evraklar arasında geçerli pasaport, biyometrik fotoğraf, mali durum belgesi, seyahat sigortası ve otel rezervasyonu bulunur. Vize türüne göre ek belgeler gerekebilir. Uzman ekibimiz size özel evrak listesi hazırlar.',
  },
   {
    id: 3,
    question: 'Online başvuru yapabilir miyim?',
    answer: 'Evet, web sitemiz üzerinden online başvuru yapabilirsiniz. Formunuzu doldurduktan sonra uzman danışmanlarımız sizinle iletişime geçerek süreci başlatır. Tüm işlemlerinizi dijital ortamda takip edebilirsiniz.',
  },
   {
    id: 4,
    question: 'Hangi ülkelere vize hizmeti veriyorsunuz?',
    answer: "ABD, İngiltere, Almanya, Fransa, Kanada, Avustralya, Dubai ve Schengen ülkeleri dahil 50'den fazla ülkeye vize danışmanlığı hizmeti vermekteyiz. Tüm destinasyonlar için profesyonel destek sağlıyoruz."
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-xl text-gray-600">
            Merak ettiklerinizin yanıtları
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#0c4a6e]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
