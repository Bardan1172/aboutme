"use client";

import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="w-full max-w-6xl mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        
        {/* KOLOM 1: PLAYLIST */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">My Playlist</span>
          </div>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/5 border border-zinc-800 bg-zinc-900/50">
            {/* Menggunakan link embed resmi Spotify */}
            <iframe
              title="Spotify Playlist"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUf69pvv2U?utm_source=generator&theme=0"
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

        {/* KOLOM 2: FAVORITE SONG */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 px-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Favorite Song</span>
          </div>
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-green-500/5 border border-zinc-800 bg-zinc-900/50">
            {/* Link resmi untuk Sheila On 7 - Dan */}
            <iframe
              title="Favorite Song"
              src="https://open.spotify.com/embed/track/4XfA67x8W31yV2D87k2N7z?utm_source=generator&theme=0"
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

      </div>
    </div>
  );
}
