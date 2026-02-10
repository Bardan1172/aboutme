"use client";

import React, { useState, useRef, useEffect } from 'react';

// Menambahkan tipe untuk YouTube Player agar tidak error di TypeScript
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // 1. Load Script YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // 2. Inisialisasi Player saat API siap
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '9btPvZdVRWY', // Link YouTube kamu
        playerVars: {
          'autoplay': 0,
          'controls': 0,
          'modestbranding': 1,
          'rel': 0,
        },
        events: {
          onStateChange: (event: any) => {
            // Update state jika user pause/play lewat cara lain
            if (event.data === window.YT.PlayerState.PLAYING) setIsPlaying(true);
            else setIsPlaying(false);
          }
        }
      });
    };
  }, []);

  const handleTogglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[500px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 px-4">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Favorite Song</span>
      </div>

      {/* Music Player Card */}
      <div className="relative overflow-hidden rounded-[40px] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl p-8 shadow-2xl">
        
        {/* Hidden YouTube Element */}
        <div id="youtube-player" className="hidden"></div>

        <div className="flex flex-col items-center gap-8">
          
          {/* Cover Art - Pakai music.png */}
          <div className="relative w-48 h-48 shadow-2xl group">
            <div className={`absolute -inset-4 bg-red-500/10 rounded-[40px] blur-3xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Cover Art" 
              className={`relative w-full h-full object-cover rounded-[35px] border border-zinc-700 transition-all duration-700 ${isPlaying ? 'scale-105 shadow-red-500/20 shadow-2xl' : 'scale-100'}`}
            />
          </div>

          {/* Info & Custom Controls */}
          <div className="w-full space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">everything u are</h3>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Hindia</p>
            </div>

            {/* Progress Bar Simulasi */}
            <div className="px-4">
              <div className="w-full h-1 bg-zinc-800 rounded-full">
                <div className={`h-full bg-red-500 rounded-full transition-all duration-[3000ms] ${isPlaying ? 'w-[40%]' : 'w-[5%]'}`}></div>
              </div>
            </div>

            {/* Tombol Remote Play/Pause */}
            <div className="flex items-center justify-center gap-10">
              <button className="text-zinc-600 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </button>

              <button 
                onClick={handleTogglePlay}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.1)]"
              >
                {isPlaying ? (
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>

              <button className="text-zinc-600 hover:text-white transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
