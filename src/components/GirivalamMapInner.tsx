'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import {
  GIRIVALAM_ROUTE_WAYPOINTS,
  GIRIVALAM_STOPS,
  ARUNACHALA_CENTER,
  TOTAL_DISTANCE_KM,
  ESTIMATED_WALK_HOURS,
} from '@/lib/girivalamStops';
import { useTranslations } from 'next-intl';

function AnimatedPath({ positions }: { positions: [number, number][] }) {
  const [drawn, setDrawn] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setDrawn(index);
      if (index >= positions.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [positions]);

  if (drawn === 0) return null;

  return (
    <Polyline
      positions={positions.slice(0, drawn)}
      pathOptions={{
        color: '#FF6B00',
        weight: 5,
        opacity: 0.85,
      }}
    />
  );
}

export default function GirivalamMapInner() {
  const t = useTranslations('girivalam');

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { value: `${TOTAL_DISTANCE_KM} km`, label: t('distance') },
          { value: `${ESTIMATED_WALK_HOURS}h`, label: t('walkTime') },
          { value: '8', label: 'Sacred Lingams' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4 text-center">
            <p className="text-gold-400 text-2xl font-serif font-bold">{stat.value}</p>
            <p className="text-white/60 text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-white/50 text-sm text-center mb-4 italic">{t('mapInstructions')}</p>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-gold-500/20">
        <MapContainer
          center={ARUNACHALA_CENTER}
          zoom={14}
          style={{ height: '550px' }}
          className="z-0"
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <AnimatedPath positions={GIRIVALAM_ROUTE_WAYPOINTS} />

          {/* Center marker for Arunachala */}
          <Marker
            position={ARUNACHALA_CENTER}
            icon={L.divIcon({
              className: '',
              html: `<div style="
                width: 40px; height: 40px; border-radius: 50%;
                background: radial-gradient(circle, #FF6B00, #D4AF37);
                border: 3px solid white;
                display: flex; align-items: center; justify-content: center;
                font-size: 18px;
                box-shadow: 0 0 20px rgba(255, 107, 0, 0.6);">
                🔥
              </div>`,
              iconSize: [40, 40],
              iconAnchor: [20, 20],
            })}
          >
            <Popup>
              <div style={{ fontFamily: 'sans-serif', minWidth: 180 }}>
                <h3 style={{ color: '#4A0E0E', fontWeight: 'bold', marginBottom: 4 }}>Arunachala Hill</h3>
                <p style={{ fontSize: 12, color: '#666' }}>The sacred hill — Lord Shiva as Agni Lingam. Circumambulation route: 14 km</p>
              </div>
            </Popup>
          </Marker>

          {/* Lingam markers */}
          {GIRIVALAM_STOPS.map((stop) => (
            <Marker
              key={stop.id}
              position={stop.coordinates}
              icon={L.divIcon({
                className: '',
                html: `<div style="
                  width: 34px; height: 34px; border-radius: 50%;
                  background: ${stop.color};
                  border: 3px solid white;
                  display: flex; align-items: center; justify-content: center;
                  color: white; font-size: 11px; font-weight: bold;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.4);">
                  ${stop.direction[0]}
                </div>`,
                iconSize: [34, 34],
                iconAnchor: [17, 17],
              })}
            >
              <Popup>
                <div style={{ fontFamily: 'sans-serif', minWidth: 220 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: stop.color, flexShrink: 0,
                    }} />
                    <h3 style={{ color: '#4A0E0E', fontWeight: 'bold', fontSize: 14, margin: 0 }}>
                      {stop.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: 11, color: '#888', marginBottom: 6 }}>
                    {stop.direction} direction · Deity: {stop.deity} · Planet: {stop.planet}
                  </p>
                  <p style={{ fontSize: 12, color: '#444', lineHeight: 1.5 }}>{stop.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Lingam legend */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {GIRIVALAM_STOPS.map((stop) => (
          <div key={stop.id} className="flex items-center gap-2 glass-card px-3 py-2">
            <div
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: stop.color }}
            />
            <div>
              <p className="text-white/80 text-xs font-medium leading-none">{stop.name}</p>
              <p className="text-white/40 text-xs">{stop.direction}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
