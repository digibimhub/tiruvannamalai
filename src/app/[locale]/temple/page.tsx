import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TempleInfo from '@/components/TempleInfo';
import Image from 'next/image';

function TempleHeader() {
  const t = useTranslations('temple');
  return (
    <div className="relative h-80 md:h-96 w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85"
        alt="Arunachaleswarar Temple"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-temple-dark" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center px-4">
        <p className="text-saffron-500 font-semibold text-sm tracking-widest uppercase mb-2">Pancha Bhuta Stala · Agni</p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-xl mb-2">
          {t('title')}
        </h1>
        <p className="text-gold-400 font-serif text-lg">{t('subtitle')}</p>
      </div>
    </div>
  );
}

export default async function TemplePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-16">
        <TempleHeader />
        <TempleInfo />
      </div>
      <Footer />
    </main>
  );
}
