"use client";

import React from 'react';

const SpotifyPlayer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-[500px] aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-zinc-800">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/1L94W3uTh9pa9I67vC7qS4?utm_source=generator&theme=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
