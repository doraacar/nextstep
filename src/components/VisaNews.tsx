import { motion } from 'framer-motion';
import { Calendar, ArrowRight, TrendingUp, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const newsArticles = [
  {
    id: 1,
    title: {
      tr: 'Almanya Fırsat Kartı Güncellemesi',
      en: 'Germany Opportunity Card Update',
      ru: 'Обновление карты возможностей Германии',
      fa: 'به‌روزرسانی کارت فرصت آلمان',
      ar: 'تحديث بطاقة الفرصة الألمانية',
    },
    summary: {
      tr: 'Almanya, 2024 yılında yeni Fırsat Kartı sistemiyle nitelikli işçilere kolaylaştırılmış süreç sunuyor.',
      en: 'Germany offers simplified process for skilled workers with new Opportunity Card system in 2024.',
      ru: 'Германия предлагает упрощенный процесс для квалифицированных работников.',
      fa: 'آلمان فرآیند ساده‌شده برای کارگران ماهر ارائه می‌دهد.',
      ar: 'تقدم ألمانيا عملية مبسطة للعمال المهرة.',
    },
    date: '2024-03-08',
    category: { tr: 'İş Vizesi', en: 'Work Visa', ru: 'Рабочая виза', fa: 'ویزای کار', ar: 'تأشيرة عمل' },
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: {
      tr: 'İspanya Dijital Nomad Vizesi Şartları',
      en: 'Spain Digital Nomad Visa Requirements',
      ru: 'Требования к визе цифрового кочевника в Испании',
      fa: 'شرایط ویزای دیجیتال نومد اسپانیا',
      ar: 'متطلبات تأشيرة البدو الرقميين في إسبانيا',
    },
    summary: {
      tr: 'İspanya, uzaktan çalışan profesyoneller için dijital nomad vizesi başvurularını resmen başlattı.',
      en: 'Spain officially launches digital nomad visa applications for remote professionals.',
      ru: 'Испания официально запускает заявки на визу цифрового кочевника.',
      fa: 'اسپانیا رسماً درخواست ویزای دیجیتال نومد را راه‌اندازی کرد.',
      ar: 'تطلق إسبانيا رسميًا طلبات تأشيرة البدو الرقميين.',
    },
    date: '2024-03-05',
    category: { tr: 'Özel Vize', en: 'Special Visa', ru: 'Специальная виза', fa: 'ویزای ویژه', ar: 'تأشيرة خاصة' },
    icon: AlertCircle,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: {
      tr: 'Schengen Bölgesi Yeni Giriş Sistemi',
      en: 'Schengen Area New Entry System',
      ru: 'Новая система въезда в Шенгенскую зону',
      fa: 'سیستم ورود جدید شنگن',
      ar: 'نظام الدخول الجديد لمنطقة شنغن',
    },
    summary: {
      tr: 'EES (Entry/Exit System) 2024 sonunda devreye giriyor. Biometrik kayıt zorunlu hale geliyor.',
      en: 'EES (Entry/Exit System) launches by end of 2024. Biometric registration becomes mandatory.',
      ru: 'EES запускается к концу 2024 года. Биометрическая регистрация становится обязательной.',
      fa: 'EES تا پایان 2024 راه‌اندازی می‌شود. ثبت بیومتریک اجباری می‌شود.',
      ar: 'يتم إطلاق نظام EES بحلول نهاية 2024. التسجيل البيومتري يصبح إلزاميًا.',
    },
    date: '2024-03-01',
    category: { tr: 'Önemli', en: 'Important', ru: 'Важно', fa: 'مهم', ar: 'مهم' },
    icon: Info,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    title: {
      tr: 'ABD Turist Vizesi Randevu Süreleri Kısaldı',
      en: 'US Tourist Visa Appointment Times Reduced',
      ru: 'Сокращены сроки записи на туристическую визу США',
      fa: 'کاهش زمان نوبت ویزای توریستی آمریکا',
      ar: 'تم تقليل أوقات المواعيد لتأشيرة السياحة الأمريكية',
    },
    summary: {
      tr: 'İstanbul Konsolosluğu randevu bekleme süresi 180 günden 45 güne düştü.',
      en: 'Istanbul Consulate appointment waiting time reduced from 180 days to 45 days.',
      ru: 'Время ожидания записи в Стамбульском консульстве сокращено с 180 до 45 дней.',
      fa: 'زمان انتظار نوبت کنسولگری استانبول از 180 روز به 45 روز کاهش یافت.',
      ar: 'انخفض وقت انتظار الموعد في قنصلية اسطنبول من 180 يومًا إلى 45 يومًا.',
    },
    date: '2024-02-28',
    category: { tr: 'Turist Vizesi', en: 'Tourist Visa', ru: 'Туристическая виза', fa: 'ویزای توریستی', ar: 'تأشيرة سياحية' },
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    title: {
      tr: 'Kanada Express Entry Puanları Düştü',
      en: 'Canada Express Entry Scores Dropped',
      ru: 'Баллы Express Entry в Канаде снизились',
      fa: 'امتیازات Express Entry کانادا کاهش یافت',
      ar: 'انخفضت نقاط الدخول السريع في كندا',
    },
    summary: {
      tr: 'Kanada göçmenlik programı minimum puan şartını düşürdü, daha fazla başvuru sahipine fırsat.',
      en: 'Canada immigration program reduces minimum score requirement, more opportunities for applicants.',
      ru: 'Иммиграционная программа Канады снижает минимальный балл.',
      fa: 'برنامه مهاجرت کانادا حداقل امتیاز را کاهش داد.',
      ar: 'برنامج الهجرة الكندي يقلل الحد الأدنى من النقاط المطلوبة.',
    },
    date: '2024-02-25',
    category: { tr: 'Göçmenlik', en: 'Immigration', ru: 'Иммиграция', fa: 'مهاجرت', ar: 'هجرة' },
    icon: AlertCircle,
    color: 'from-red-500 to-pink-500',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    title: {
      tr: 'İngiltere Yeni Öğrenci Vizesi Kuralları',
      en: 'UK New Student Visa Rules',
      ru: 'Новые правила студенческой визы Великобритании',
      fa: 'قوانین جدید ویزای دانشجویی انگلستان',
      ar: 'قواعد جديدة لتأشيرة الطلاب في المملكة المتحدة',
    },
    summary: {
      tr: 'İngiltere öğrenci vizesi başvurularında yeni mali yeterlilik şartları getirdi.',
      en: 'UK introduces new financial sufficiency requirements for student visa applications.',
      ru: 'Великобритания вводит новые требования к финансовой достаточности.',
      fa: 'انگلستان الزامات مالی جدیدی را معرفی کرد.',
      ar: 'تقدم المملكة المتحدة متطلبات جديدة للكفاءة المالية.',
    },
    date: '2024-02-20',
    category: { tr: 'Öğrenci Vizesi', en: 'Student Visa', ru: 'Студенческая виза', fa: 'ویزای دانشجویی', ar: 'تأشيرة طالب' },
    icon: Info,
    color: 'from-indigo-500 to-blue-500',
    image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function VisaNews() {
  const { language } = useLanguage();

  return (
    <section id="news" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c5a059]/10 rounded-full mb-6 border border-[#c5a059]/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#0f172a]">
              {language === 'tr' ? 'Canlı Güncellemeler' : 'Live Updates'}
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#0f172a] mb-6">
            {language === 'tr' ? 'Güncel Vize Rehberi & Haberler' : language === 'en' ? 'Latest Visa Guide & News' : language === 'ru' ? 'Последние новости виз' : language === 'fa' ? 'آخرین اخبار ویزا' : 'أحدث أخبار التأشيرات'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'tr' ? 'Dünya vize politikalarındaki en son gelişmeleri takip edin' : 'Stay updated with the latest developments in global visa policies'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => {
            const Icon = article.icon;
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title[language]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${article.color}`}>
                      <Icon className="w-3 h-3" />
                      <span>{article.category[language]}</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US')}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 line-clamp-2 group-hover:text-[#c5a059] transition-colors">
                    {article.title[language]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.summary[language]}
                  </p>
                  <button className="flex items-center space-x-2 text-[#c5a059] font-semibold hover:space-x-3 transition-all group-hover:text-[#0f172a]">
                    <span>{language === 'tr' ? 'Devamını Oku' : 'Read More'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
            {language === 'tr' ? 'Tüm Haberleri Görüntüle' : 'View All News'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
