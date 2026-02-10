"use client";

import React, { useState, useRef } from 'react';

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* Header Label */}
      <div className="flex items-center gap-2 px-2">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Favorite Song</span>
      </div>

      {/* Main Card */}
      <div className="relative overflow-hidden rounded-[32px] bg-zinc-900/40 border border-zinc-800 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-zinc-700">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Sampul Musik */}
          <div className="relative w-32 h-32 flex-shrink-0 group">
            <div className={`absolute -inset-2 bg-blue-500/20 rounded-3xl blur-2xl transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Music Cover" 
              className={`relative w-full h-full object-cover rounded-2xl border border-zinc-700 shadow-lg transition-transform duration-700 ${isPlaying ? 'scale-105 rotate-3' : 'scale-100'}`}
            />
          </div>

          {/* Info Lagu */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight">Love Anthem</h3>
            <p className="text-blue-500 text-sm font-medium uppercase tracking-[0.2em] mt-1">Bardan's Choice</p>
            
            <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
              <button 
                onClick={togglePlay}
                className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>
              
              <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Status</span>
                <span className="text-xs text-zinc-300 font-mono">{isPlaying ? 'PLAYING' : 'PAUSED'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Audio Engine */}
        <audio 
          ref={audioRef} 
          src="/foto/Love-Anthem.mp3" 
          onEnded={() => setIsPlaying(false)}
          preload="metadata"
        />
      </div>
    </div>
  );
}
