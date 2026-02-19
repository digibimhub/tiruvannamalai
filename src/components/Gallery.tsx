'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/templeData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const t = useTranslations('gallery');
  const [selected, setSelected] = useState<number | null>(null);

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
        <p className="text-white/60 text-lg">{t('subtitle')}</p>
        <div className="w-24 h-0.5 bg-gold-500 mx-auto mt-6" />
      </motion.div>

      {/* CSS Masonry grid */}
      <div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        style={{ columnGap: '1rem' }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="break-inside-avoid mb-4 cursor-pointer group relative overflow-hidden rounded-xl"
            onClick={() => setSelected(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍
              </span>
            </div>
            {/* Caption on hover */}
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs">{img.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {selected !== null && (
        <LightboxModal
          images={GALLERY_IMAGES}
          initialIndex={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
