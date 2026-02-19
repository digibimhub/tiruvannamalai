'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { getPurnamiDates } from '@/lib/moonPhases';
import { motion } from 'framer-motion';

export default function PurnamiCalendar() {
  const t = useTranslations('calendar');
  const [selectedYear, setSelectedYear] = useState(2025);

  const allDates = useMemo(() => getPurnamiDates(2025, 2027), []);
  const yearDates = allDates.filter((d) => d.year === selectedYear);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t('title')}</h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6 mb-8" />

        {/* Year selector */}
        <div className="flex justify-center gap-3">
          {[2025, 2026, 2027].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-7 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedYear === year
                  ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/30'
                  : 'bg-maroon-800/60 text-gold-400 border border-gold-500/20 hover:bg-maroon-700'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Purnami info */}
      <div className="glass-card p-5 mb-8 text-center">
        <p className="text-white/70 text-sm leading-relaxed">{t('purnamiInfo')}</p>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {yearDates.map((purnami, i) => (
          <motion.div
            key={purnami.formatted}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className={`relative p-5 rounded-2xl border text-center overflow-hidden ${
              purnami.isKarthigaiDeeam
                ? 'bg-gradient-to-b from-gold-500/25 to-saffron-500/15 border-gold-500 shadow-xl shadow-gold-500/20'
                : 'bg-maroon-800/50 border-gold-500/15 hover:border-gold-500/30 transition-colors'
            }`}
          >
            {purnami.isKarthigaiDeeam && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            )}

            {/* Moon icon */}
            <div className="text-4xl mb-2">🌕</div>

            <p className="text-gold-400 font-serif font-semibold text-sm">{purnami.monthName}</p>
            <p className="text-white text-3xl font-bold">{purnami.dayNum}</p>
            <p className="text-white/40 text-xs mb-3">{purnami.year}</p>

            {purnami.isKarthigaiDeeam ? (
              <div className="bg-gold-500 text-maroon-900 text-xs px-3 py-1 rounded-full font-bold">
                ✨ {t('karthigaiDeeam')}
              </div>
            ) : (
              <div className="text-saffron-500 text-xs font-semibold">
                {t('girivalamDay')}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
