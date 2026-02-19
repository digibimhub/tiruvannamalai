import { setRequestLocale } from 'next-intl/server';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PlacesGrid from '@/components/PlacesGrid';

export default async function PlacesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="pt-20">
        <PlacesGrid />
      </div>
      <Footer />
    </main>
  );
}
