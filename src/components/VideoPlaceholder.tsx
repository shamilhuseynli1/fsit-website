'use client';

import { useState } from 'react';

interface VideoPlaceholderProps {
  title: string;
  description?: string;
  thumbnailUrl?: string;
  videoUrl?: string;
  duration?: string;
  className?: string;
}

export default function VideoPlaceholder({
  title,
  description,
  thumbnailUrl,
  videoUrl,
  duration,
  className = '',
}: VideoPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden group ${className}`}>
      {isPlaying && videoUrl ? (
        <div className="aspect-video">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div
          className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center cursor-pointer relative"
          onClick={handlePlay}
          style={{
            backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

          {/* Play Button */}
          <div className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ background: 'var(--green)' }}
          >
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Title & Duration */}
          <div className="relative z-10 mt-4 text-center px-4">
            <p className="text-white font-semibold text-lg">{title}</p>
            {description && (
              <p className="text-white/70 text-sm mt-1">{description}</p>
            )}
            {duration && (
              <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs text-white/80 bg-white/20">
                {duration}
              </span>
            )}
          </div>

          {/* Coming Soon Badge if no video */}
          {!videoUrl && (
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'var(--green)', color: 'white' }}
            >
              Coming Soon
            </div>
          )}
        </div>
      )}
    </div>
  );
}
