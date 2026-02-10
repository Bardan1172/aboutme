"use client";

import React, { useState, useRef, useEffect } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(100);
  const playerRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const initPlayer = () => {
    if (playerRef.current) return;
    playerRef.current = new window.YT.Player('youtube-player-final', {
      height: '0',
      width: '0',
      videoId: '9btPvZdVRWY',
      playerVars: { 
        'autoplay': 0, 
        'controls': 0, 
        'modestbranding': 1,
        'rel': 0,
        'origin': typeof window !== 'undefined' ? window.location.origin : ''
      },
      events: {
        onReady: (event: any) => {
          setDuration(event.target.getDuration());
          event.target.setVolume(volume);
        },
        onStateChange: (event: any) => {
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
        }
      }
    });
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        if (playerRef.current?.getCurrentTime) {
          setCurrentTime(playerRef.current.getCurrentTime());
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPlaying]);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initPlayer;
    } else {
      initPlayer();
    }
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!playerRef.current) return;
    isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    playerRef.current?.seekTo(time, true);
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    playerRef.current?.setVolume(v);
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    // Max-width ditambah (lebar), scale dihilangkan agar ukuran elemen dalam pas (perkecil sedikit)
    <div className="flex flex-col gap-6 w-full max-w-[950px] mx-auto my-10 px-4">
      
      {/* Label Atas */}
      <div className="flex items-center gap-3 px-2">
        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`}></div>
        <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-bold">Favorite Song</span>
      </div>

      {/* Container Utama - Dibuat lebih slim secara vertikal tapi lebar ke samping */}
      <div className="relative overflow-hidden rounded-[40px] bg-[#121212]/80 border border-zinc-800/50 backdrop-blur-2xl p-6 md:p-10 shadow-2xl">
        <div id="youtube-player-final" className="hidden"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          
          {/* Cover Art - Ukuran disesuaikan agar tidak terlalu dominan */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
            <img 
              src="/foto/music.png" 
              alt="Cover Art" 
              className={`relative w-full h-full object-cover rounded-[30px] border border-zinc-800 transition-all duration-700 shadow-xl ${isPlaying ? 'scale-105' : 'scale-100'}`}
            />
          </div>

          {/* Player Controls Section */}
          <div className="flex-1 w-full space-y-6">
            
            {/* Info Lagu */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-white tracking-tighter">Love Anthem</h3>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">LyoraChay · BrianVal · MW</p>
            </div>

            {/* Progress Bar Area */}
            <div className="space-y-3">
              <input 
                type="range" min="0" max={duration || 100} value={currentTime} onChange={handleSeek} 
                className="w-full h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-white hover:accent-red-500 transition-all" 
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono font-bold uppercase">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Center Controls - Tombol Play di Tengah */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-10">
                <button className="text-zinc-600 hover:text-white transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
                </button>
                
                <button 
                  onClick={handleTogglePlay}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-xl"
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

              {/* Volume Slider */}
              <div className="flex items-center gap-3 w-full max-w-[180px] group opacity-60 hover:opacity-100 transition-opacity">
                <svg width="14" height="14" fill="currentColor" className="text-zinc-500 group-hover:text-white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                <input 
                  type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} 
                  className="w-full h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-zinc-500 group-hover:accent-white transition-all" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
