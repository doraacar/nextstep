import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'ru' | 'fa' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  tr: {
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetlerimiz',
    'nav.countries': 'Ülkeler',
    'nav.process': 'Süreç',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'hero.title': 'Dünya Kapılarını NextStep Global ile Aralayın',
    'hero.subtitle': 'Profesyonel vize danışmanlığı ile hayalinizdeki ülkeye güvenle adım atın',
    'hero.search.country': 'Gidilecek Ülke',
    'hero.search.visaType': 'Vize Türü',
    'hero.search.button': 'Vize Ara',
    'hero.cta': 'Hemen Başvur',
    'hero.learn': 'Detaylı Bilgi Al',
    'ai.title': 'Akıllı Vize Yardımcısı',
    'ai.greeting': 'Merhaba! Size nasıl yardımcı olabilirim?',
    'ai.quick1': 'Schengen vizesi şartları neler?',
    'ai.quick2': 'ABD vizesi ne kadar sürer?',
    'ai.quick3': 'Başvuru yapmak istiyorum',
    'ai.placeholder': 'Sorunuzu yazın...',
    'countries.title': 'Popüler Destinasyonlar',
    'countries.subtitle': 'En çok tercih edilen ülkeler ve vize süreçleri',
    'countries.status.high': 'Yüksek Onay Oranı',
    'countries.status.fast': 'Hızlı Randevu',
    'countries.status.easy': 'Kolay Süreç',
    'countries.button': 'Başvur',
    'application.title': 'Online Başvuru',
    'application.step1': 'Kişisel Bilgiler',
    'application.step2': 'Vize Detayları',
    'application.step3': 'Belgeler',
    'application.step4': 'Özet',
    'footer.rights': '© 2024 NextStep Global. Tüm hakları saklıdır.',
    'footer.services': 'Hizmetler',
    'footer.support': 'Destek',
    'footer.legal': 'Yasal',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.countries': 'Countries',
    'nav.process': 'Process',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Open World Doors with NextStep Global',
    'hero.subtitle': 'Step confidently into your dream country with professional visa consultancy',
    'hero.search.country': 'Destination Country',
    'hero.search.visaType': 'Visa Type',
    'hero.search.button': 'Search Visa',
    'hero.cta': 'Apply Now',
    'hero.learn': 'Learn More',
    'ai.title': 'Smart Visa Assistant',
    'ai.greeting': 'Hello! How can I help you?',
    'ai.quick1': 'What are Schengen visa requirements?',
    'ai.quick2': 'How long does US visa take?',
    'ai.quick3': 'I want to apply',
    'ai.placeholder': 'Type your question...',
    'countries.title': 'Popular Destinations',
    'countries.subtitle': 'Most preferred countries and visa processes',
    'countries.status.high': 'High Approval Rate',
    'countries.status.fast': 'Fast Appointment',
    'countries.status.easy': 'Easy Process',
    'countries.button': 'Apply',
    'application.title': 'Online Application',
    'application.step1': 'Personal Information',
    'application.step2': 'Visa Details',
    'application.step3': 'Documents',
    'application.step4': 'Summary',
    'footer.rights': '© 2024 NextStep Global. All rights reserved.',
    'footer.services': 'Services',
    'footer.support': 'Support',
    'footer.legal': 'Legal',
  },
  ru: {
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.countries': 'Страны',
    'nav.process': 'Процесс',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',
    'hero.title': 'Откройте мир с NextStep Global',
    'hero.subtitle': 'Уверенно шагните в страну своей мечты с профессиональной визовой консультацией',
    'hero.search.country': 'Страна назначения',
    'hero.search.visaType': 'Тип визы',
    'hero.search.button': 'Поиск визы',
    'hero.cta': 'Подать заявку',
    'hero.learn': 'Узнать больше',
    'ai.title': 'Умный визовый помощник',
    'ai.greeting': 'Здравствуйте! Как я могу вам помочь?',
    'ai.quick1': 'Какие требования для шенгенской визы?',
    'ai.quick2': 'Сколько времени занимает виза в США?',
    'ai.quick3': 'Я хочу подать заявку',
    'ai.placeholder': 'Введите ваш вопрос...',
    'countries.title': 'Популярные направления',
    'countries.subtitle': 'Наиболее востребованные страны и визовые процессы',
    'countries.status.high': 'Высокий процент одобрения',
    'countries.status.fast': 'Быстрая запись',
    'countries.status.easy': 'Простой процесс',
    'countries.button': 'Подать заявку',
    'application.title': 'Онлайн-заявка',
    'application.step1': 'Личные данные',
    'application.step2': 'Детали визы',
    'application.step3': 'Документы',
    'application.step4': 'Резюме',
    'footer.rights': '© 2024 NextStep Global. Все права защищены.',
    'footer.services': 'Услуги',
    'footer.support': 'Поддержка',
    'footer.legal': 'Правовая информация',
  },
  fa: {
    'nav.home': 'صفحه اصلی',
    'nav.services': 'خدمات',
    'nav.countries': 'کشورها',
    'nav.process': 'فرآیند',
    'nav.about': 'درباره ما',
    'nav.contact': 'تماس',
    'hero.title': 'درهای جهان را با NextStep Global باز کنید',
    'hero.subtitle': 'با مشاوره حرفه‌ای ویزا با اطمینان به کشور رویایی خود قدم بگذارید',
    'hero.search.country': 'کشور مقصد',
    'hero.search.visaType': 'نوع ویزا',
    'hero.search.button': 'جستجوی ویزا',
    'hero.cta': 'اکنون درخواست دهید',
    'hero.learn': 'اطلاعات بیشتر',
    'ai.title': 'دستیار هوشمند ویزا',
    'ai.greeting': 'سلام! چطور می‌تونم کمکتون کنم؟',
    'ai.quick1': 'شرایط ویزای شنگن چیست؟',
    'ai.quick2': 'ویزای آمریکا چقدر طول می‌کشد؟',
    'ai.quick3': 'می‌خواهم درخواست دهم',
    'ai.placeholder': 'سوال خود را بنویسید...',
    'countries.title': 'مقاصد محبوب',
    'countries.subtitle': 'کشورها و فرآیندهای ویزای پرطرفدار',
    'countries.status.high': 'نرخ تایید بالا',
    'countries.status.fast': 'نوبت سریع',
    'countries.status.easy': 'فرآیند آسان',
    'countries.button': 'درخواست',
    'application.title': 'درخواست آنلاین',
    'application.step1': 'اطلاعات شخصی',
    'application.step2': 'جزئیات ویزا',
    'application.step3': 'مدارک',
    'application.step4': 'خلاصه',
    'footer.rights': '© 2024 NextStep Global. کلیه حقوق محفوظ است.',
    'footer.services': 'خدمات',
    'footer.support': 'پشتیبانی',
    'footer.legal': 'قانونی',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.countries': 'الدول',
    'nav.process': 'العملية',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'افتح أبواب العالم مع NextStep Global',
    'hero.subtitle': 'اخطو بثقة إلى بلد أحلامك مع استشارة تأشيرة احترافية',
    'hero.search.country': 'دولة الوجهة',
    'hero.search.visaType': 'نوع التأشيرة',
    'hero.search.button': 'البحث عن تأشيرة',
    'hero.cta': 'قدّم الآن',
    'hero.learn': 'معرفة المزيد',
    'ai.title': 'مساعد التأشيرة الذكي',
    'ai.greeting': 'مرحباً! كيف يمكنني مساعدتك؟',
    'ai.quick1': 'ما هي متطلبات تأشيرة شنغن؟',
    'ai.quick2': 'كم من الوقت تستغرق تأشيرة الولايات المتحدة؟',
    'ai.quick3': 'أريد التقديم',
    'ai.placeholder': 'اكتب سؤالك...',
    'countries.title': 'الوجهات الشهيرة',
    'countries.subtitle': 'الدول الأكثر تفضيلاً وعمليات التأشيرة',
    'countries.status.high': 'معدل موافقة عالٍ',
    'countries.status.fast': 'موعد سريع',
    'countries.status.easy': 'عملية سهلة',
    'countries.button': 'قدّم',
    'application.title': 'التقديم عبر الإنترنت',
    'application.step1': 'المعلومات الشخصية',
    'application.step2': 'تفاصيل التأشيرة',
    'application.step3': 'المستندات',
    'application.step4': 'الملخص',
    'footer.rights': '© 2024 NextStep Global. جميع الحقوق محفوظة.',
    'footer.services': 'الخدمات',
    'footer.support': 'الدعم',
    'footer.legal': 'قانوني',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar' || language === 'fa';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
