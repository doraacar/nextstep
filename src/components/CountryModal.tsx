import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, DollarSign, Calendar, HelpCircle, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface CountryModalProps {
  isOpen: boolean;
  onClose: () => void;
  country: {
    name: { tr: string; en: string; ru: string; fa: string; ar: string };
    flag: string;
    image: string;
  } | null;
}

export default function CountryModal({ isOpen, onClose, country }: CountryModalProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'documents' | 'fees' | 'timeline' | 'faq'>('documents');

  if (!country) return null;

  const tabs = [
    { id: 'documents', icon: FileText, label: { tr: 'Gerekli Evraklar', en: 'Required Documents', ru: 'Документы', fa: 'مدارک لازم', ar: 'المستندات المطلوبة' } },
    { id: 'fees', icon: DollarSign, label: { tr: 'Ücretler', en: 'Fees', ru: 'Стоимость', fa: 'هزینه‌ها', ar: 'الرسوم' } },
    { id: 'timeline', icon: Calendar, label: { tr: 'Süreç Takvimi', en: 'Timeline', ru: 'График', fa: 'زمان‌بندی', ar: 'الجدول الزمني' } },
    { id: 'faq', icon: HelpCircle, label: { tr: 'Sıkça Sorulan Sorular', en: 'FAQ', ru: 'FAQ', fa: 'سوالات متداول', ar: 'الأسئلة الشائعة' } },
  ];

  const documents = [
    { tr: 'Geçerli Pasaport (en az 6 ay)', en: 'Valid Passport (min 6 months)', ru: 'Действующий паспорт (мин 6 месяцев)', fa: 'پاسپورت معتبر (حداقل 6 ماه)', ar: 'جواز سفر ساري (6 أشهر على الأقل)' },
    { tr: 'Biyometrik Fotoğraf (2 adet)', en: 'Biometric Photos (2 pcs)', ru: 'Биометрические фото (2 шт)', fa: 'عکس بیومتریک (2 عدد)', ar: 'صور بيومترية (قطعتان)' },
    { tr: 'Mali Durum Belgesi', en: 'Financial Statement', ru: 'Финансовый документ', fa: 'گواهی مالی', ar: 'كشف حساب مالي' },
    { tr: 'Seyahat Sigortası', en: 'Travel Insurance', ru: 'Страховка', fa: 'بیمه مسافرتی', ar: 'تأمين السفر' },
    { tr: 'Otel Rezervasyonu', en: 'Hotel Reservation', ru: 'Бронь отеля', fa: 'رزرو هتل', ar: 'حجز فندق' },
    { tr: 'Uçak Bileti', en: 'Flight Ticket', ru: 'Авиабилет', fa: 'بلیط هواپیما', ar: 'تذكرة الطيران' },
    { tr: 'İşveren Mektubu', en: 'Employment Letter', ru: 'Письмо от работодателя', fa: 'نامه کارفرما', ar: 'خطاب من صاحب العمل' },
  ];

  const fees = [
    { item: { tr: 'Konsolosluk Ücreti', en: 'Consulate Fee', ru: 'Консульский сбор', fa: 'هزینه کنسولگری', ar: 'رسوم القنصلية' }, amount: '$80' },
    { item: { tr: 'Hizmet Bedeli', en: 'Service Fee', ru: 'Сервисный сбор', fa: 'هزینه خدمات', ar: 'رسوم الخدمة' }, amount: '$150' },
    { item: { tr: 'Sigorta', en: 'Insurance', ru: 'Страховка', fa: 'بیمه', ar: 'التأمين' }, amount: '$50' },
    { item: { tr: 'Premium Hızlı İşlem', en: 'Premium Fast Track', ru: 'Срочная обработка', fa: 'پردازش سریع', ar: 'المعالجة السريعة' }, amount: '$200', optional: true },
  ];

  const timeline = [
    { step: { tr: 'Başvuru', en: 'Application', ru: 'Заявка', fa: 'درخواست', ar: 'التقديم' }, duration: { tr: '1 Gün', en: '1 Day', ru: '1 День', fa: '1 روز', ar: 'يوم واحد' } },
    { step: { tr: 'Belge İnceleme', en: 'Document Review', ru: 'Проверка документов', fa: 'بررسی مدارک', ar: 'مراجعة المستندات' }, duration: { tr: '2-3 Gün', en: '2-3 Days', ru: '2-3 Дня', fa: '2-3 روز', ar: '2-3 أيام' } },
    { step: { tr: 'Randevu', en: 'Appointment', ru: 'Запись', fa: 'نوبت', ar: 'الموعد' }, duration: { tr: '5-7 Gün', en: '5-7 Days', ru: '5-7 Дней', fa: '5-7 روز', ar: '5-7 أيام' } },
    { step: { tr: 'Sonuç', en: 'Result', ru: 'Результат', fa: 'نتیجه', ar: 'النتيجة' }, duration: { tr: '10-15 Gün', en: '10-15 Days', ru: '10-15 Дней', fa: '10-15 روز', ar: '10-15 يومًا' } },
  ];

  const faqs = [
    {
      q: { tr: 'Başvuru süresi ne kadar?', en: 'How long is the process?', ru: 'Сколько времени занимает процесс?', fa: 'فرآیند چقدر طول می‌کشد؟', ar: 'كم من الوقت تستغرق العملية؟' },
      a: { tr: 'Ortalama 10-15 iş günü.', en: 'Average 10-15 business days.', ru: 'В среднем 10-15 рабочих дней.', fa: 'به طور متوسط 10-15 روز کاری.', ar: 'في المتوسط 10-15 يوم عمل.' },
    },
    {
      q: { tr: 'Randevu garantisi var mı?', en: 'Is appointment guaranteed?', ru: 'Гарантирована ли запись?', fa: 'آیا نوبت تضمین شده است؟', ar: 'هل الموعد مضمون؟' },
      a: { tr: 'Evet, size en uygun tarihe randevu alırız.', en: 'Yes, we secure the most suitable date.', ru: 'Да, мы обеспечиваем наиболее подходящую дату.', fa: 'بله، مناسب‌ترین تاریخ را تأمین می‌کنیم.', ar: 'نعم، نؤمن أنسب تاريخ.' },
    },
    {
      q: { tr: 'Red durumunda ücret iadesi?', en: 'Refund if rejected?', ru: 'Возврат при отказе?', fa: 'بازپرداخت در صورت رد؟', ar: 'استرداد في حالة الرفض؟' },
      a: { tr: 'Hizmet bedelinin %50\'si iade edilir.', en: '50% of service fee is refunded.', ru: '50% от сервисного сбора возвращается.', fa: '50٪ هزینه خدمات بازگردانده می‌شود.', ar: 'يتم استرداد 50٪ من رسوم الخدمة.' },
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={country.image}
                alt={country.name[language]}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute top-6 right-6">
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <span className="text-6xl">{country.flag}</span>
                <h2 className="text-3xl font-bold text-white">{country.name[language]}</h2>
              </div>
            </div>

            <div className="flex border-b border-gray-200 px-6 bg-gray-50">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all relative ${
                      activeTab === tab.id
                        ? 'text-[#c5a059]'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{tab.label[language]}</span>
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-[#c5a059]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <AnimatePresence mode="wait">
                {activeTab === 'documents' && (
                  <motion.div
                    key="documents"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-[#c5a059] flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{doc[language]}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'fees' && (
                  <motion.div
                    key="fees"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {fees.map((fee, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-[#c5a059]" />
                          <span className="text-gray-800 font-medium">{fee.item[language]}</span>
                          {fee.optional && (
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {language === 'tr' ? 'Opsiyonel' : 'Optional'}
                            </span>
                          )}
                        </div>
                        <span className="text-xl font-bold text-[#c5a059]">{fee.amount}</span>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-lg font-semibold">{language === 'tr' ? 'Toplam' : 'Total'}</span>
                        <span className="text-2xl font-bold">$280</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'timeline' && (
                  <motion.div
                    key="timeline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {timeline.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#c5a059] to-[#d4af6a] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1 p-4 bg-gray-50 rounded-xl">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-gray-800">{item.step[language]}</span>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{item.duration[language]}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'faq' && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    {faqs.map((faq, index) => (
                      <div key={index} className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div className="flex items-start space-x-3 mb-3">
                          <HelpCircle className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-1" />
                          <p className="font-semibold text-gray-800">{faq.q[language]}</p>
                        </div>
                        <div className="flex items-start space-x-3 pl-8">
                          <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                          <p className="text-gray-600">{faq.a[language]}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <button className="w-full px-8 py-4 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl font-semibold hover:shadow-xl transition-all hover:scale-105">
                {language === 'tr' ? 'Hemen Başvur' : 'Apply Now'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
