import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, User, FileText, Upload, ClipboardCheck, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ApplicationForm() {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [showNotification, setShowNotification] = useState(true);
  const [recentApplications, setRecentApplications] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentApplications(prev => Math.floor(Math.random() * 20) + 8);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { key: 'application.step1', icon: User },
    { key: 'application.step2', icon: FileText },
    { key: 'application.step3', icon: Upload },
    { key: 'application.step4', icon: ClipboardCheck },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="application" className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-40 bg-white rounded-xl shadow-2xl p-4 border-l-4 border-green-500 max-w-sm"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <Users className="w-4 h-4 text-gray-600" />
                  <p className="font-semibold text-gray-800 text-sm">
                    {language === 'tr' ? 'Canlı Aktivite' : 'Live Activity'}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'tr'
                    ? `Son 1 saatte ${recentApplications} kişi başvuru yaptı`
                    : `${recentApplications} people applied in the last hour`}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 rounded-full mb-4 border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700">
              {language === 'tr' ? `${recentApplications} Aktif Başvuru` : `${recentApplications} Active Applications`}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            {t('application.title')}
          </h2>
          <p className="text-xl text-gray-600">
            Basit ve hızlı başvuru süreci
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
              <motion.div
                className="absolute top-5 left-0 h-0.5 bg-[#c5a059] -z-10"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              />

              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;

                return (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        backgroundColor: isCompleted || isActive ? '#c5a059' : '#e5e7eb',
                      }}
                      className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <Icon className={`w-5 h-5 ${isActive || isCompleted ? 'text-white' : 'text-gray-400'}`} />
                      )}
                    </motion.div>
                    <span className={`text-xs font-medium ${isActive ? 'text-[#0f172a]' : 'text-gray-500'}`}>
                      {t(step.key)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {currentStep === 0 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Kişisel Bilgileriniz</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ad</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Soyad</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none"
                        placeholder="Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Vize Detayları</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gitmek İstediğiniz Ülke</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none">
                        <option>Ülke seçin</option>
                        <option>ABD</option>
                        <option>İngiltere</option>
                        <option>Almanya</option>
                        <option>Fransa</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vize Türü</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none">
                        <option>Vize türü seçin</option>
                        <option>Turist Vizesi</option>
                        <option>İş Vizesi</option>
                        <option>Öğrenci Vizesi</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tahmini Seyahat Tarihi</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Belgeler</h3>
                  <div className="space-y-4">
                    {['Pasaport', 'Fotoğraf', 'Mali Durum Belgesi', 'Sigorta'].map((doc, index) => (
                      <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-[#c5a059] transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Upload className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-gray-700">{doc}</span>
                          </div>
                          <button className="px-4 py-2 bg-[#0f172a] text-white rounded-lg text-sm hover:bg-[#c5a059] transition-colors">
                            Yükle
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-6">Başvuru Özeti</h3>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Başvuru Tipi:</span>
                      <span className="font-semibold text-[#0f172a]">Turist Vizesi</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Ülke:</span>
                      <span className="font-semibold text-[#0f172a]">ABD</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">İşlem Ücreti:</span>
                      <span className="font-semibold text-[#0f172a]">250 USD</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Danışmanlık Ücreti:</span>
                      <span className="font-semibold text-[#0f172a]">150 USD</span>
                    </div>
                    <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
                      <span className="text-lg font-bold text-gray-700">Toplam:</span>
                      <span className="text-2xl font-bold text-[#c5a059]">400 USD</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Geri</span>
            </button>

            <button
              onClick={nextStep}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              <span>{currentStep === steps.length - 1 ? 'Başvuruyu Tamamla' : 'İleri'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
