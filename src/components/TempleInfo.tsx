'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { DARSHAN_TIMINGS, SPECIAL_POOJAS, PRAKARAMS, HOW_TO_REACH } from '@/lib/templeData';

type Tab = 'history' | 'architecture' | 'darshan' | 'reach';

export default function TempleInfo() {
  const t = useTranslations('temple');
  const [activeTab, setActiveTab] = useState<Tab>('history');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'history', label: t('history') },
    { id: 'architecture', label: t('architecture') },
    { id: 'darshan', label: t('darshan') },
    { id: 'reach', label: t('howToReach') },
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      {/* Tab buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-saffron-500 text-white shadow-lg shadow-saffron-500/30'
                : 'bg-maroon-800/60 text-gold-400 border border-gold-500/20 hover:bg-maroon-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'history' && (
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-gold-400 font-serif text-2xl font-semibold mb-4">{t('history')}</h3>
                <p className="text-white/75 leading-relaxed mb-6">{t('historyText')}</p>
                <h3 className="text-gold-400 font-serif text-2xl font-semibold mb-4">{t('significance')}</h3>
                <p className="text-white/75 leading-relaxed">{t('significanceText')}</p>
              </div>
              <div className="glass-card p-6">
                <h4 className="text-gold-400 font-serif text-xl mb-4 text-center">Pancha Bhuta Stalas</h4>
                <div className="space-y-3">
                  {[
                    { element: '🔥 Fire (Agni)', temple: 'Arunachaleswarar — Tiruvannamalai', active: true },
                    { element: '🌊 Water (Jal)', temple: 'Jambukeswarar — Thiruvanaikaval', active: false },
                    { element: '🌍 Earth (Prithvi)', temple: 'Ekambareswarar — Kanchipuram', active: false },
                    { element: '💨 Air (Vayu)', temple: 'Nataraja — Chidambaram', active: false },
                    { element: '✨ Space (Akash)', temple: 'Kalahasti — Srikalahasti', active: false },
                  ].map((item) => (
                    <div
                      key={item.element}
                      className={`flex items-start gap-3 p-3 rounded-lg ${
                        item.active ? 'bg-saffron-500/20 border border-saffron-500/40' : 'bg-white/5'
                      }`}
                    >
                      <span className="text-lg">{item.element.split(' ')[0]}</span>
                      <div>
                        <p className={`text-sm font-semibold ${item.active ? 'text-saffron-500' : 'text-white/60'}`}>
                          {item.element.slice(3)}
                        </p>
                        <p className="text-white/50 text-xs">{item.temple}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div>
              <p className="text-white/75 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                {t('architectureText')}
              </p>
              <h3 className="text-gold-400 font-serif text-2xl font-semibold mb-6 text-center">{t('prakarams')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRAKARAMS.map((p) => (
                  <div key={p.number} className="glass-card p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-saffron-500/20 border border-saffron-500/40 flex items-center justify-center text-saffron-500 font-bold text-sm">
                        {p.number}
                      </span>
                      <span className="text-gold-400 font-semibold text-sm">{p.nameShort}</span>
                    </div>
                    <p className="text-white/60 text-xs leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'darshan' && (
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="glass-card p-6">
                  <h3 className="text-gold-400 font-serif text-xl mb-4">{t('darshan')}</h3>
                  <div className="space-y-3">
                    {DARSHAN_TIMINGS.map((timing) => (
                      <div key={timing.session} className="flex justify-between items-center py-2 border-b border-gold-500/10">
                        <span className="text-white/70 text-sm">{timing.session}</span>
                        <span className="text-gold-400 font-semibold text-sm">
                          {timing.open} – {timing.close}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-gold-400 font-serif text-xl mb-4">Special Poojas</h3>
                  <div className="space-y-2">
                    {SPECIAL_POOJAS.map((pooja) => (
                      <div key={pooja.name} className="py-2 border-b border-gold-500/10">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white/80 text-xs font-medium">{pooja.name}</p>
                            <p className="text-white/40 text-xs">{pooja.description}</p>
                          </div>
                          <span className="text-saffron-500 text-xs font-bold ml-2 whitespace-nowrap">{pooja.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="glass-card p-5 text-center">
                <p className="text-white/50 text-xs">
                  ⚠️ Timings may vary on festival days and Purnami (full moon). Please verify locally before visiting.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reach' && (
            <div className="grid md:grid-cols-3 gap-6">
              {HOW_TO_REACH.map((route) => (
                <div key={route.from} className="glass-card p-6">
                  <h3 className="text-gold-400 font-serif text-xl mb-1">From {route.from}</h3>
                  <p className="text-saffron-500 font-bold mb-3">{route.distance} · {route.time}</p>
                  <p className="text-white/50 text-xs mb-3">{route.route}</p>
                  <ul className="space-y-2">
                    {route.modes.map((mode) => (
                      <li key={mode} className="flex gap-2 text-sm text-white/70">
                        <span className="text-gold-400 mt-0.5">→</span>
                        {mode}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
