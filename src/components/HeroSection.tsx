'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=85"
        alt="Arunachaleswarar Temple — Tiruvannamalai"
        fill
        priority
        quality={90}
        className="object-cover object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-temple-dark" />

      {/* Glowing Om symbol */}
      <motion.div
        className="absolute inset-0 flex items-start justify-center pt-32 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 2 }}
      >
        <motion.span
          className="text-gold-500/20 text-[200px] md:text-[300px] font-serif leading-none"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ॐ
        </motion.span>
      </motion.div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gold-400 font-serif text-xl md:text-2xl tracking-widest mb-4"
        >
          {t('sanskrit')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="text-5xl md:text-8xl font-serif font-bold text-white mb-2 drop-shadow-2xl"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gold-300 font-serif text-2xl md:text-3xl mb-6"
        >
          {t('tamil')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-white/75 text-base md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Link
            href="/temple"
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-saffron-500/30 hover:shadow-saffron-500/50 hover:scale-105"
          >
            {t('cta')}
            <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gold-400/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold-400/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
