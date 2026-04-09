import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    id: 1,
    name: 'Ayşe Yılmaz',
    role: { tr: 'Yazılım Geliştirici', en: 'Software Developer', ru: 'Разработчик', fa: 'توسعه‌دهنده نرم‌افزار', ar: 'مطور برامج' },
    country: { tr: 'ABD Vizesi', en: 'US Visa', ru: 'Виза США', fa: 'ویزای آمریکا', ar: 'تأشيرة أمريكية' },
    content: {
      tr: 'NextStep Global sayesinde ABD B1/B2 vize başvuru sürecim çok hızlı ve sorunsuz geçti. Uzman ekipleri her adımda yanımdaydı.',
      en: 'Thanks to NextStep Global, my US B1/B2 visa process was fast and smooth. Their expert team was with me every step.',
      ru: 'Благодаря NextStep Global моя виза B1/B2 была быстрой и гладкой.',
      fa: 'به لطف NextStep Global، فرآیند ویزای B1/B2 من سریع و روان بود.',
      ar: 'بفضل NextStep Global، كانت عملية تأشيرة B1/B2 سريعة وسلسة.',
    },
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    name: 'Mehmet Kaya',
    role: { tr: 'İşletme Sahibi', en: 'Business Owner', ru: 'Владелец бизнеса', fa: 'صاحب کسب‌وکار', ar: 'صاحب عمل' },
    country: { tr: 'İngiltere Vizesi', en: 'UK Visa', ru: 'Виза Великобритании', fa: 'ویزای انگلستان', ar: 'تأشيرة بريطانية' },
    content: {
      tr: 'İngiltere iş vizesi için başvurdum ve sadece 5 gün içinde onay aldım. Profesyonel hizmet ve güvenilir danışmanlık.',
      en: 'Applied for UK business visa and got approval in just 5 days. Professional service and reliable consultancy.',
      ru: 'Подал заявку на бизнес-визу в Великобританию и получил одобрение за 5 дней.',
      fa: 'برای ویزای تجاری انگلستان درخواست دادم و فقط در 5 روز تأیید گرفتم.',
      ar: 'تقدمت بطلب للحصول على تأشيرة عمل بريطانية وحصلت على الموافقة في 5 أيام فقط.',
    },
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    name: 'Zeynep Demir',
    role: { tr: 'Öğrenci', en: 'Student', ru: 'Студент', fa: 'دانشجو', ar: 'طالب' },
    country: { tr: 'Almanya Vizesi', en: 'Germany Visa', ru: 'Виза Германии', fa: 'ویزای آلمان', ar: 'تأشيرة ألمانية' },
    content: {
      tr: 'Almanya öğrenci vizesi başvurumda her aşamayı detaylı anlattılar. Randevu ve evrak konusunda hiç zorluk çekmedim.',
      en: 'They explained every step of my Germany student visa. Had no difficulty with appointments and documents.',
      ru: 'Они объяснили каждый шаг моей студенческой визы в Германию.',
      fa: 'هر مرحله از ویزای دانشجویی آلمان را توضیح دادند.',
      ar: 'شرحوا كل خطوة من تأشيرة الطالب الألمانية.',
    },
    rating: 5,
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 4,
    name: 'Can Özkan',
    role: { tr: 'Mühendis', en: 'Engineer', ru: 'Инженер', fa: 'مهندس', ar: 'مهندس' },
    country: { tr: 'Kanada Vizesi', en: 'Canada Visa', ru: 'Виза Канады', fa: 'ویزای کانادا', ar: 'تأشيرة كندية' },
    content: {
      tr: 'Kanada göçmenlik sürecimde NextStep Global\'nın AI destekli evrak kontrolü sayesinde hiçbir eksik olmadan başvuru yaptım.',
      en: 'In my Canada immigration process, NextStep Global\'s AI-powered document check ensured a complete application.',
      ru: 'В моем процессе иммиграции в Канаду проверка документов с помощью ИИ обеспечила полную заявку.',
      fa: 'در فرآیند مهاجرت کانادا، بررسی مدارک با هوش مصنوعی اطمینان از کامل بودن درخواست را فراهم کرد.',
      ar: 'في عملية الهجرة الكندية، ضمنت فحص المستندات بالذكاء الاصطناعي طلبًا كاملاً.',
    },
    rating: 5,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNWEwNTkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptLTggOHY0aC00di00aDR6bTggMHY0aC00di00aDR6bS04IDh2NGgtNHYtNGg0em04IDh2NGgtNHYtNGg0em04LTI0djRoLTR2LTRoNHptLTggOHY0aC00di00aDR6bTggOHY0aC00di00aDR6bS04IDh2NGgtNHYtNGg0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {language === 'tr' ? 'Müşteri Yorumları' : language === 'en' ? 'Client Testimonials' : language === 'ru' ? 'Отзывы клиентов' : language === 'fa' ? 'نظرات مشتریان' : 'آراء العملاء'}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'tr' ? 'Binlerce mutlu müşterimizin deneyimleri' : 'Experiences of thousands of happy clients'}
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl"
            >
              <div className="absolute top-8 left-8 text-[#c5a059]/20">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-[#c5a059] shadow-xl"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentTestimonial.name}</h3>
                    <p className="text-gray-300 mb-3">{currentTestimonial.role[language]}</p>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-[#c5a059]/20 text-[#c5a059] rounded-full text-sm font-semibold border border-[#c5a059]/30">
                        {currentTestimonial.country[language]}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-200 text-lg leading-relaxed italic">
                  "{currentTestimonial.content[language]}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-[#c5a059]'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
