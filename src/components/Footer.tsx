import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  const quickLinks = [
    { href: '/', label: navT('home') },
    { href: '/temple', label: navT('temple') },
    { href: '/places', label: navT('places') },
    { href: '/calendar', label: navT('calendar') },
    { href: '/girivalam', label: navT('girivalam') },
    { href: '/gallery', label: navT('gallery') },
  ];

  return (
    <footer className="bg-maroon-900 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold-500 text-3xl">🔱</span>
              <div>
                <p className="text-white font-serif font-bold text-xl">Tiruvannamalai</p>
                <p className="text-gold-400 text-sm">திருவண்ணாமலை</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{t('tagline')}</p>
            <p className="text-gold-400/60 font-serif text-lg mt-3">ॐ நமஃ சிவாய</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-serif font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-serif font-semibold text-lg mb-4">{t('contact')}</h3>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex gap-2">
                <span>📍</span>
                <p>{t('address')}</p>
              </div>
              <div className="flex gap-2">
                <span>📞</span>
                <p>{t('phone')}</p>
              </div>
              <div className="flex gap-2">
                <span>🕌</span>
                <p>Arunachaleswarar Temple, Car Street</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-500/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Tiruvannamalai Guide. {t('rights')}.
          </p>
          <p className="text-white/30 text-xs text-center">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
