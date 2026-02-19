'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const PLACES = [
  {
    id: 'ramana',
    nameKey: 'ramana' as const,
    descKey: 'ramanaDesc' as const,
    image: 'https://images.unsplash.com/photo-1615869442320-fd02a129c77c?w=600&q=80',
    icon: '🕉️',
    highlight: 'Self-Inquiry · Atma Vichara',
  },
  {
    id: 'seshadri',
    nameKey: 'seshadri' as const,
    descKey: 'seshadriDesc' as const,
    image: 'https://images.unsplash.com/photo-1604947180747-c2b41cbf6e91?w=600&q=80',
    icon: '🪔',
    highlight: 'Samadhi Shrine · 1870–1929',
  },
  {
    id: 'virupaksha',
    nameKey: 'virupaksha' as const,
    descKey: 'virupakshaDesc' as const,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    icon: '🏔️',
    highlight: 'Cave Meditation · Arunachala Hill',
  },
  {
    id: 'skandashramam',
    nameKey: 'skandashramam' as const,
    descKey: 'skandashramamDesc' as const,
    image: 'https://images.unsplash.com/photo-1545126583-c7c8b9a04f4c?w=600&q=80',
    icon: '⛰️',
    highlight: 'Panoramic Views · 1916–1922',
  },
  {
    id: 'arunachala',
    nameKey: 'arunachala' as const,
    descKey: 'arunachalaDesc' as const,
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80',
    icon: '🔥',
    highlight: '2682 feet · Living Lingam',
  },
];

export default function PlacesGrid() {
  const t = useTranslations('places');

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t('title')}</h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLACES.map((place, i) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group glass-card overflow-hidden hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={place.image}
                alt={t(place.nameKey)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent" />
              <span className="absolute top-3 right-3 text-2xl">{place.icon}</span>
              <span className="absolute bottom-3 left-3 text-gold-400 text-xs font-semibold bg-black/40 px-2 py-1 rounded-full">
                {place.highlight}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-white font-serif font-semibold text-lg mb-2 group-hover:text-gold-400 transition-colors">
                {t(place.nameKey)}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                {t(place.descKey)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
