"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fungsi untuk cek apakah file ada saat pertama kali load
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.onerror = () => {
        setErrorMsg("File musik tidak ditemukan di /foto/Love-Anthem.mp3");
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setErrorMsg(null);
            })
            .catch((error) => {
              console.error("Playback error:", error);
              setErrorMsg("Klik lagi atau cek izin suara browser");
              setIsPlaying(false);
            });
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${isPlaying ? 'bg-green-500' : 'bg-blue-500'}`}></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">Favorite Song</span>
        </div>
        {errorMsg && <span className="text-[9px] text-red-500 font-bold uppercase">{errorMsg}</span>}
      </div>

      <div className="relative overflow-hidden rounded-[32px] bg-zinc-900/40 border border-zinc-800 p-6 backdrop-blur-xl shadow-2xl transition-all duration-500">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Cover Art */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <div className={`absolute -inset-2 bg-blue-500/10 rounded-3xl blur-2xl transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Cover" 
              className={`relative w-full h-full object-cover rounded-2xl border border-zinc-700 transition-all duration-700 ${isPlaying ? 'scale-105 shadow-blue-500/20 shadow-2xl' : 'scale-100'}`}
            />
          </div>

          {/* Info & Control */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight">Love Anthem</h3>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mt-1 font-bold">Bardan's Choice</p>
            
            <button 
              onClick={togglePlay}
              className="mt-6 flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-xl mx-auto md:mx-0"
            >
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
          </div>
        </div>

        <audio 
          ref={audioRef} 
          src="/foto/Love-Anthem.mp3" 
          onEnded={() => setIsPlaying(false)}
          preload="auto"
        />
      </div>
    </div>
  );
}
