'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

interface LightboxModalProps {
  images: ImageData[];
  initialIndex: number;
  onClose: () => void;
}

export default function LightboxModal({ images, initialIndex, onClose }: LightboxModalProps) {
  const t = useTranslations('gallery');
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next, onClose]);

  const current = images[index];

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/95 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4">
          <VisuallyHidden>
            <Dialog.Title>Photo Gallery Lightbox</Dialog.Title>
          </VisuallyHidden>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/40 text-sm">
            {index + 1} / {images.length}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
          >
            <span>✕</span>
            <span>{t('close')}</span>
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center"
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Caption */}
          {current.caption && (
            <p className="mt-4 text-white/60 text-sm text-center max-w-lg">{current.caption}</p>
          )}

          {/* Navigation buttons */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <button
              onClick={prev}
              className="text-white/50 hover:text-white text-4xl transition-colors p-2"
              aria-label={t('prev')}
            >
              ‹
            </button>
          </div>
          <div className="absolute inset-y-0 right-4 flex items-center">
            <button
              onClick={next}
              className="text-white/50 hover:text-white text-4xl transition-colors p-2"
              aria-label={t('next')}
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  i === index ? 'border-gold-400 opacity-100' : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <Image src={img.src} alt={img.alt} width={48} height={48} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
