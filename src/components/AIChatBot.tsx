import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Database, Brain } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function AIChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { t, language } = useLanguage();

  const quickReplies = [
    t('ai.quick1'),
    t('ai.quick2'),
    t('ai.quick3'),
  ];

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, isBot: false, timestamp: new Date() }]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const responses = {
        tr: "Anlıyorum, bu konuda size yardımcı olmak isterim. Uzman danışmanlarımız size özel bir değerlendirme sunabilir. Hemen iletişime geçin.",
        en: "I understand. Our expert consultants can provide you with a personalized assessment. Contact us now.",
        ru: "Понимаю. Наши эксперты могут предоставить вам персонализированную оценку. Свяжитесь с нами.",
        fa: "متوجه هستم. مشاوران ما می‌توانند ارزیابی شخصی‌سازی شده ارائه دهند. اکنون تماس بگیرید.",
        ar: "أفهم. يمكن لمستشارينا تقديم تقييم شخصي. اتصل بنا الآن.",
      };
      const botResponse = responses[language] || responses.tr;
      setMessages(prev => [...prev, { text: botResponse, isBot: true, timestamp: new Date() }]);
    }, 2500);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-[#0f172a] to-[#c5a059] rounded-full shadow-2xl flex items-center justify-center z-50 group"
          >
            <MessageCircle className="w-7 h-7 text-white" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[480px] bg-white shadow-2xl z-50 flex flex-col border-l border-gray-200"
          >
            <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNjNWEwNTkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptLTggOHY0aC00di00aDR6bTggMHY0aC00di00aDR6bS04IDh2NGgtNHYtNGg0em04IDh2NGgtNHYtNGg0em04LTI0djRoLTR2LTRoNHptLTggOHY0aC00di00aDR6bTggOHY0aC00di00aDR6bS04IDh2NGgtNHYtNGg0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

              <div className="relative flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-14 h-14 bg-gradient-to-br from-[#c5a059] to-[#d4af6a] rounded-2xl flex items-center justify-center shadow-xl"
                  >
                    <Brain className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{t('ai.title')}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-400 rounded-full"
                      />
                      <span className="text-xs text-gray-300 font-medium">
                        {language === 'tr' ? 'Premium Concierge' : 'Premium Concierge'}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-br from-gray-50 to-gray-100">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#c5a059] to-[#d4af6a] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium leading-relaxed">{t('ai.greeting')}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-3 pl-11">
                      {language === 'tr' ? 'Size en uygun vize çözümünü bulmak için buradayım. Aşağıdaki sorulardan birini seçebilir veya kendi sorunuzu yazabilirsiniz.' : 'I am here to find the best visa solution for you.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-1">
                      {language === 'tr' ? 'Popüler Sorular' : 'Popular Questions'}
                    </p>
                    {quickReplies.map((reply, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        onClick={() => handleQuickReply(reply)}
                        className="w-full text-left p-4 bg-white hover:bg-gradient-to-br hover:from-[#c5a059]/5 hover:to-[#d4af6a]/5 rounded-xl text-sm text-gray-700 hover:text-[#0f172a] transition-all border border-gray-200 hover:border-[#c5a059] hover:shadow-md group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{reply}</span>
                          <Send className="w-4 h-4 text-gray-400 group-hover:text-[#c5a059] transition-colors" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-md border border-gray-200'
                        : 'bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white shadow-lg'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <span className="text-xs opacity-60 mt-2 block">
                      {message.timestamp.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200 max-w-[85%]">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Database className="w-4 h-4 text-[#c5a059]" />
                      </motion.div>
                      <span className="text-sm text-gray-600 font-medium">
                        {language === 'tr' ? 'Veritabanı kontrol ediliyor...' : 'Checking database...'}
                      </span>
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputMessage);
                }}
                className="flex items-center space-x-3"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={t('ai.placeholder')}
                  disabled={isTyping}
                  className="flex-1 px-5 py-3.5 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#c5a059] focus:border-[#c5a059] outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isTyping}
                  className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#c5a059] text-white rounded-xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
