"use client";

import React, { useState, useRef } from 'react';

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Coba putar musik
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch((err) => {
            console.error("Playback blocked:", err);
            setHasError(true);
            // Paksa interaksi ulang jika gagal
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* Header Label */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-zinc-600'}`}></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Favorite Song</span>
        </div>
        {hasError && (
          <span className="text-[9px] text-red-500 font-bold animate-bounce">KLIK LAGI UNTUK PLAY!</span>
        )}
      </div>

      {/* Music Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-zinc-900/40 border border-zinc-800 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-zinc-700">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Cover Art */}
          <div className="relative w-32 h-32 flex-shrink-0">
            {/* Glow effect saat main */}
            <div className={`absolute -inset-2 bg-blue-500/20 rounded-3xl blur-2xl transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Cover" 
              className={`relative w-full h-full object-cover rounded-2xl border border-zinc-700 transition-transform duration-700 ${isPlaying ? 'scale-105 rotate-2' : 'scale-100'}`}
            />
          </div>

          {/* Info & Button */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight">Love Anthem</h3>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-1">Local Track</p>
            
            <button 
              onClick={togglePlay}
              className="mt-6 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-xl mx-auto md:mx-0 group"
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1 group-hover:text-blue-600"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Hidden Audio Element */}
        <audio 
          ref={audioRef} 
          src="/foto/Love-Anthem.mp3" 
          onEnded={() => setIsPlaying(false)}
          preload="auto"
          className="hidden"
        />
      </div>
    </div>
  );
}
