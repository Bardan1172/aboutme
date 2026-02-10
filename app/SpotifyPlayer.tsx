import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="w-full rounded-[12px] overflow-hidden shadow-2xl border border-zinc-800 bg-black">
      <iframe 
        title="Spotify Playlist"
        style={{ borderRadius: "12px" }} 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1E37j9dQZF1E3?utm_source=generator&theme=0" 
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
