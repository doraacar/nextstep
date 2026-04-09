import { motion } from 'framer-motion';
import { Briefcase, Palmtree, Users, Building2, GraduationCap, Home } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Briefcase,
    title: 'Çalışma Vizesi',
    description: 'İş vizesi başvuruları',
  },
  {
    id: 2,
    icon: Palmtree,
    title: 'Turistik Vize',
    description: 'Tatil ve seyahat vizeleri',
  },
  {
    id: 3,
    icon: Users,
    title: 'Aile Birleşimi',
    description: 'Aile üyeleriniz için vizeler',
  },
  {
    id: 4,
    icon: Building2,
    title: 'Ticari Vize',
    description: 'İş gezileri ve toplantılar',
  },
  {
    id: 5,
    icon: GraduationCap,
    title: 'Öğrenci Vizesi',
    description: 'Yerli ve yabancı öğrenciler',
  },
  {
    id: 6,
    icon: Home,
    title: 'İkamet İşleri',
    description: 'İkamet izinleri ve yenileme',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c4a6e] mb-4">
            Hizmetlerimiz
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
