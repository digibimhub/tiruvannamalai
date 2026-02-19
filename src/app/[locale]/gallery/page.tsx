import { setRequestLocale } from 'next-intl/server';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default async function GalleryPage({
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
        <Gallery />
      </div>
      <Footer />
    </main>
  );
}
