'use client';

import { useEffect, useRef, useState } from 'react';

interface Location {
  city: string;
  country: string;
  region: 'middle-east' | 'asia' | 'europe';
  x: number;
  y: number;
  isHeadquarters?: boolean;
}

export default function RegionsMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLocation, setActiveLocation] = useState<string | null>('Riyadh');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Coordinates aligned with dotted world map image (percentage based)
  const locations: Location[] = [
    // Middle East
    { city: 'Riyadh', country: 'Saudi Arabia', region: 'middle-east', x: 57, y: 43, isHeadquarters: true },
    { city: 'Dubai', country: 'UAE', region: 'middle-east', x: 60, y: 44 },
    { city: 'Doha', country: 'Qatar', region: 'middle-east', x: 58, y: 44 },
    { city: 'Amman', country: 'Jordan', region: 'middle-east', x: 55, y: 38 },
    { city: 'Beirut', country: 'Lebanon', region: 'middle-east', x: 54, y: 37 },

    // Asia
    { city: 'Bangalore', country: 'India', region: 'asia', x: 68, y: 48 },
    { city: 'Singapore', country: 'Singapore', region: 'asia', x: 75, y: 53 },
    { city: 'Ho Chi Minh City', country: 'Vietnam', region: 'asia', x: 75, y: 46 },
    { city: 'Manila', country: 'Philippines', region: 'asia', x: 80, y: 46 },

    // Europe
    { city: 'London', country: 'UK', region: 'europe', x: 48, y: 28 },
    { city: 'Berlin', country: 'Germany', region: 'europe', x: 51, y: 27 },
    { city: 'Barcelona', country: 'Spain', region: 'europe', x: 47, y: 33 },
    { city: 'Milan', country: 'Italy', region: 'europe', x: 50, y: 31 },
    { city: 'Zagreb', country: 'Croatia', region: 'europe', x: 52, y: 31 },
  ];

  const regionLabels = {
    'middle-east': 'Middle East',
    'asia': 'Asia Pacific',
    'europe': 'Europe',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-cycle through locations
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveLocation((current) => {
        const currentIndex = locations.findIndex((l) => l.city === current);
        const nextIndex = (currentIndex + 1) % locations.length;
        return locations[nextIndex].city;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isVisible]);

  const selectedLocation = locations.find(
    (l) => l.city === (hoveredLocation || activeLocation)
  );

  const hq = locations.find(l => l.isHeadquarters);

  return (
    <div ref={containerRef} className="relative">
      {/* Map Container */}
      <div className="relative rounded-3xl overflow-hidden border border-neutral-200" style={{ background: 'var(--cream)' }}>

        {/* Dotted World Map Background - Using PNG image */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <img
            src="/world-map-dots.png"
            alt=""
            className="w-full h-full object-contain"
            style={{
              opacity: 0.35,
              filter: 'grayscale(100%) brightness(0.7)',
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(0,166,81,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Main map area */}
        <div className="relative h-[450px] md:h-[550px] p-6 md:p-12">
          {/* Connection lines from HQ to all locations */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glowLine">
                <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Curved connection lines from HQ to each location */}
            {hq && locations.filter(l => !l.isHeadquarters).map((location, index) => {
              const midX = (hq.x + location.x) / 2;
              const midY = Math.min(hq.y, location.y) - 10;

              return (
                <g key={location.city}>
                  {/* Curved path */}
                  <path
                    d={`M ${hq.x} ${hq.y} Q ${midX} ${midY} ${location.x} ${location.y}`}
                    fill="none"
                    stroke="var(--green)"
                    strokeWidth="0.2"
                    strokeOpacity={hoveredLocation === location.city || activeLocation === location.city ? 0.7 : 0.2}
                    filter="url(#glowLine)"
                    className="transition-all duration-500"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ease-out ${index * 0.1}s`,
                    }}
                  />

                  {/* Animated dot traveling along path */}
                  <circle
                    r="0.5"
                    fill="var(--green)"
                    style={{
                      opacity: isVisible && (hoveredLocation === location.city || activeLocation === location.city) ? 1 : 0.3,
                    }}
                  >
                    <animateMotion
                      dur={`${3 + index * 0.3}s`}
                      repeatCount="indefinite"
                      path={`M ${hq.x} ${hq.y} Q ${midX} ${midY} ${location.x} ${location.y}`}
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Location markers */}
          {locations.map((location, index) => (
            <div
              key={location.city}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                opacity: isVisible ? 1 : 0,
                transition: `all 0.5s ease-out ${index * 0.08 + 0.3}s`,
              }}
              onMouseEnter={() => setHoveredLocation(location.city)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => setActiveLocation(location.city)}
            >
              {/* Pulse rings for HQ */}
              {location.isHeadquarters && (
                <>
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '50px',
                      height: '50px',
                      left: '-17px',
                      top: '-17px',
                      border: '2px solid var(--green)',
                      animation: 'pulse 2s ease-out infinite',
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: '50px',
                      height: '50px',
                      left: '-17px',
                      top: '-17px',
                      border: '2px solid var(--green)',
                      animation: 'pulse 2s ease-out infinite 1s',
                    }}
                  />
                </>
              )}

              {/* Marker dot */}
              <div
                className={`relative rounded-full transition-all duration-300 ${
                  location.isHeadquarters ? 'w-4 h-4' : 'w-2.5 h-2.5'
                }`}
                style={{
                  background: 'var(--green)',
                  boxShadow: hoveredLocation === location.city || activeLocation === location.city
                    ? '0 0 20px rgba(0, 166, 81, 0.6)'
                    : '0 0 8px rgba(0, 166, 81, 0.3)',
                  transform: hoveredLocation === location.city || activeLocation === location.city ? 'scale(1.4)' : 'scale(1)',
                }}
              />

              {/* City label */}
              <div
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-center transition-all duration-300"
                style={{
                  top: location.isHeadquarters ? '-35px' : '-25px',
                  opacity: location.isHeadquarters || hoveredLocation === location.city || activeLocation === location.city ? 1 : 0,
                  transform: `translateX(-50%) translateY(${location.isHeadquarters || hoveredLocation === location.city || activeLocation === location.city ? '0' : '5px'})`,
                }}
              >
                <span className={`font-bold ${location.isHeadquarters ? 'text-sm' : 'text-xs'}`} style={{ color: 'var(--black)' }}>
                  {location.city}
                </span>
                {location.isHeadquarters && (
                  <span className="block text-[10px] font-medium" style={{ color: 'var(--green)' }}>HEADQUARTERS</span>
                )}
              </div>
            </div>
          ))}

          {/* Selected Location Info Panel */}
          <div
            className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:bottom-12 md:w-64 bg-white rounded-2xl p-5 shadow-lg border border-neutral-100 transition-all duration-500"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {selectedLocation ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: 'var(--green)' }}
                  />
                  <h3 className="font-bold text-lg" style={{ color: 'var(--black)' }}>{selectedLocation.city}</h3>
                  {selectedLocation.isHeadquarters && (
                    <span className="text-[10px] bg-green-100 px-2 py-0.5 rounded-full font-medium" style={{ color: 'var(--green)' }}>
                      HQ
                    </span>
                  )}
                </div>
                <p className="text-sm" style={{ color: 'var(--gray-600)' }}>{selectedLocation.country}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--gray-400)' }}>{regionLabels[selectedLocation.region]}</p>
              </>
            ) : (
              <p className="text-sm" style={{ color: 'var(--gray-400)' }}>Hover over a location</p>
            )}
          </div>

          {/* Stats */}
          <div
            className="absolute top-6 left-6 md:top-12 md:left-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.7s ease-out',
            }}
          >
            <p className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--green)' }}>14</p>
            <p className="text-sm" style={{ color: 'var(--gray-600)' }}>Cities worldwide</p>
            <p className="text-xs mt-1" style={{ color: 'var(--gray-400)' }}>3 Regions · 13 Countries</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
