import { setRequestLocale } from 'next-intl/server';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PurnamiCalendar from '@/components/PurnamiCalendar';

export default async function CalendarPage({
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
        <PurnamiCalendar />
      </div>
      <Footer />
    </main>
  );
}
