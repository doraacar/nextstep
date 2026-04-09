import { motion } from 'framer-motion';
import { Database, Zap, Eye } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Database,
    title: 'Güncel Veri',
    description: 'En güncel vize mevzuatları ile hatasız başvuru.',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Hızlı Sonuç',
    description: 'Minimum sürede randevu ve dosya hazırlığı.',
  },
  {
    id: 3,
    icon: Eye,
    title: 'Şeffaf Süreç',
    description: 'Her adımda anlık bilgilendirme ve destek.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-4">
            Neden Biz?
          </h2>
          <p className="text-xl text-gray-600">
            Fark yaratan profesyonel hizmet anlayışımız
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
