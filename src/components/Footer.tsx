import { Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-gradient-to-br from-[#0c4a6e] to-[#075985] text-white border-none scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/nextstep_logo.png"
                  alt="NextStep Global Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">NextStep Global</h3>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Profesyonel vize danışmanlığı hizmetleri
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Yasal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Sosyal Medya</h4>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2026 NextStep Global. Tüm hakları saklıdır.
          </p>
          <p className="text-white/40 text-xs">
            NextStep Global Official Seal
          </p>
        </div>
      </div>
    </footer>
  );
}
