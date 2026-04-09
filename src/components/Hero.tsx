import { motion } from 'framer-motion';

const countries = [
  { code: 'gb', name: 'Birleşik Krallık', color: 'from-blue-600 to-red-600' },
  { code: 'de', name: 'Almanya', color: 'from-black to-red-600' },
  { code: 'fr', name: 'Fransa', color: 'from-blue-600 to-red-600' },
  { code: 'ca', name: 'Kanada', color: 'from-red-600 to-white' },
  { code: 'au', name: 'Avustralya', color: 'from-blue-600 to-red-600' },
  { code: 'ae', name: 'BAE', color: 'from-green-600 to-red-600' },
  { code: 'es', name: 'İspanya', color: 'from-red-600 to-yellow-500' },
  { code: 'it', name: 'İtalya', color: 'from-green-600 to-red-600' },
  { code: 'nl', name: 'Hollanda', color: 'from-red-600 to-blue-600' },
  { code: 'ch', name: 'İsviçre', color: 'from-red-600 to-white' },
  { code: 'se', name: 'İsveç', color: 'from-blue-600 to-yellow-500' },
];

export default function Hero() {

  return (
    <div id="hero" className="relative min-h-screen pt-16 md:pt-20 overflow-x-hidden scroll-mt-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative w-full z-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start justify-center"
            >
              <div className="flex flex-col gap-y-6 mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.5] tracking-tight text-center lg:text-left">
                  DÜNYAYA AÇILAN
                </h1>
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.5] tracking-tight text-center lg:text-left" style={{ color: '#f5a623' }}>
                  EĞİTİM VE VİZE KAPINIZ
                </h2>
              </div>
              <p className="text-base md:text-lg text-white/75 font-regular max-w-xl text-center lg:text-left leading-relaxed">
                Profesyonel eğitim ve vize danışmanlığı ile hayalinizdeki geleceğe güvenle adım atın
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5a623] via-[#3b9edb] to-[#0369a1] rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-2xl">
                  <img
                    src="/planet_hero.jpg"
                    alt="Passport and Visa"
                    className="w-full max-h-[400px] lg:max-h-[500px] rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full mt-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-8">
            <h3 className="text-white/60 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 text-center">
              Hizmet Verdiğimiz Popüler Ülkeler
            </h3>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0f172a] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />

              <motion.div
                animate={{ x: [0, -1400] }}
                transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex items-center space-x-6 sm:space-x-10 py-4"
              >
                {[...countries, ...countries].map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.15, y: -5 }}
                    className="flex-shrink-0 flex flex-col items-center space-y-2 group cursor-pointer"
                  >
                    <div className="relative w-10 h-10 sm:w-14 sm:h-14">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${country.color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300`} />
                      <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:border-white/60 transition-all duration-300 flex items-center justify-center">
                        <img
                          src={`https://flagcdn.com/w80/${country.code}.png`}
                          alt={country.name}
                          className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <span className="text-white/70 text-[10px] sm:text-xs font-semibold group-hover:text-white transition-colors min-w-[60px] sm:min-w-[80px] text-center">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
