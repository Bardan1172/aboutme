"use client";

import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-zinc-800 bg-zinc-900/50">
        <iframe
          title="Spotify Playlist"
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/track/5WOSNVChcadlsCRiqXE45K?utm_source=generator"
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
