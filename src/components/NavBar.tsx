'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LOCALE_LABELS: Record<string, string> = {
  en: 'English',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  kn: 'ಕನ್ನಡ',
};

export default function NavBar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/temple', label: t('temple') },
    { href: '/places', label: t('places') },
    { href: '/calendar', label: t('calendar') },
    { href: '/girivalam', label: t('girivalam') },
    { href: '/gallery', label: t('gallery') },
  ];

  function handleLocaleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-maroon-900/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-gold-500 text-2xl">🔱</span>
            <div>
              <p className="text-white font-serif font-bold text-lg leading-none">Tiruvannamalai</p>
              <p className="text-gold-400 text-xs">திருவண்ணாமலை</p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-white/80 hover:text-gold-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language switcher + mobile menu */}
          <div className="flex items-center gap-3">
            {/* Language dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-white/80 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                <span className="text-xs">🌐</span>
                <span>{LOCALE_LABELS[locale]?.split(' ')[0] || locale.toUpperCase()}</span>
                <span className="text-xs">▾</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 bg-maroon-800 border border-gold-500/20 rounded-xl shadow-xl overflow-hidden min-w-[130px]"
                  >
                    {Object.entries(LOCALE_LABELS).map(([code, label]) => (
                      <button
                        key={code}
                        onClick={() => handleLocaleChange(code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-maroon-700 transition-colors ${
                          locale === code ? 'text-gold-400 font-semibold' : 'text-white/80'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              <div className="w-5 space-y-1">
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-maroon-900/98 border-t border-gold-500/10 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-saffron-500/20 text-gold-400'
                      : 'text-white/80 hover:text-gold-400 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
