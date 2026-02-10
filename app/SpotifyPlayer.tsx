"use client";

import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 px-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">My Playlist</span>
      </div>
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5 border border-zinc-800 bg-zinc-900/50">
        <iframe
          title="Nothing Song Playlist"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM3M?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: '12px' }}
        ></iframe>
      </div>
    </div>
  );
}
