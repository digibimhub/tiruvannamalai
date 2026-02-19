import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import GirivalamMap from '@/components/GirivalamMap';

function GirivalamHeader() {
  const t = useTranslations('girivalam');
  return (
    <div className="text-center py-16 px-4">
      <p className="text-saffron-500 font-semibold text-sm tracking-widest uppercase mb-3">Sacred Circumambulation</p>
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{t('title')}</h1>
      <p className="text-gold-400 font-serif text-xl mb-6">{t('subtitle')}</p>
      <div className="w-24 h-0.5 bg-gold-500 mx-auto mb-6" />
      <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">{t('routeDesc')}</p>
      <p className="text-saffron-500 font-semibold mt-4">{t('bestTime')}</p>
    </div>
  );
}

export default async function GirivalamPage({
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
        <GirivalamHeader />
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <GirivalamMap />
        </div>
      </div>
      <Footer />
    </main>
  );
}
