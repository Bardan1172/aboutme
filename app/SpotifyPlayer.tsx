import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="w-full rounded-[12px] overflow-hidden shadow-2xl border border-zinc-800 bg-black">
      <iframe 
        data-testid="embed-iframe"
        title="Spotify Playlist"
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/pl" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen={true} 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  );
}
