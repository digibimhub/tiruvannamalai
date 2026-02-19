import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

function HomeTeasers() {
  const templeT = useTranslations('temple');
  const placesT = useTranslations('places');
  const calT = useTranslations('calendar');
  const girT = useTranslations('girivalam');

  return (
    <>
      {/* Temple Teaser */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-saffron-500 font-semibold text-sm tracking-widest uppercase mb-3">Pancha Bhuta Stala — Agni</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{templeT('title')}</h2>
            <p className="text-white/60 leading-relaxed mb-6">{templeT('historyText')}</p>
            <Link
              href="/temple"
              className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
            >
              Explore Temple →
            </Link>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
              alt="Arunachaleswarar Temple"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-temple-dark/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Quick links grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              href: '/places',
              icon: '🏛️',
              title: placesT('title'),
              desc: 'Ramana Ashram, Virupaksha Cave, Skandashramam & more sacred sites',
            },
            {
              href: '/calendar',
              icon: '🌕',
              title: calT('title'),
              desc: 'Full moon dates for 2025–2027 with Karthigai Deepam highlighted',
            },
            {
              href: '/girivalam',
              icon: '🗺️',
              title: girT('title'),
              desc: 'Interactive animated map of the 14km sacred circumambulation route',
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass-card p-6 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10 group"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-gold-400 font-serif text-xl font-semibold mb-2 group-hover:text-gold-300">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              <p className="text-saffron-500 text-sm mt-4 font-semibold">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider quote */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-transparent via-maroon-900/30 to-transparent">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-gold-400 font-serif text-3xl md:text-4xl leading-relaxed italic mb-4">
            &ldquo;The hill Arunachala stands as the embodiment of Shiva himself.&rdquo;
          </p>
          <cite className="text-white/40 text-sm">— Ramana Maharshi</cite>
        </blockquote>
      </section>
    </>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <HomeTeasers />
      <Footer />
    </main>
  );
}
