import { motion } from 'framer-motion';
import { Search, FileCheck, CheckSquare, Calendar, Package } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Ön Değerlendirme',
    description: 'Durumunuzu analiz ediyoruz',
  },
  {
    id: 2,
    icon: FileCheck,
    title: 'Belge Hazırlığı',
    description: 'Evraklarınızı hazırlıyoruz',
  },
  {
    id: 3,
    icon: CheckSquare,
    title: 'Kontrol',
    description: 'Detaylı inceleme yapıyoruz',
  },
  {
    id: 4,
    icon: Calendar,
    title: 'Randevu',
    description: 'Başvurunuzu gerçekleştiriyoruz',
  },
  {
    id: 5,
    icon: Package,
    title: 'Pasaport Teslimi',
    description: 'Vizenizi teslim ediyoruz',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-24 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-4">
            Süreç Nasıl İşler?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0c4a6e] to-[#075985] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0c4a6e] mb-2">{step.id}</div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0c4a6e] to-transparent"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
