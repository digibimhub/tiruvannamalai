import dynamic from 'next/dynamic';

const GirivalamMapInner = dynamic(
  () => import('./GirivalamMapInner'),
  {
    ssr: false,
    loading: () => (
      <div className="h-[550px] glass-card flex items-center justify-center rounded-2xl">
        <div className="text-center">
          <div className="text-5xl mb-4 animate-pulse">🗺️</div>
          <p className="text-gold-400 font-serif text-xl animate-pulse">Loading Sacred Map...</p>
          <p className="text-white/40 text-sm mt-2">Preparing the Girivalam route</p>
        </div>
      </div>
    ),
  }
);

export default function GirivalamMap() {
  return <GirivalamMapInner />;
}
