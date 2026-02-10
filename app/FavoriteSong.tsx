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

  // Perbaikan: Gunakan fungsi inisialisasi yang bisa dipanggil kapan saja
  const initPlayer = () => {
    if (playerRef.current) return; // Jangan buat player jika sudah ada

    playerRef.current = new window.YT.Player('youtube-player-final', {
      height: '0',
      width: '0',
      videoId: '9btPvZdVRWY',
      playerVars: { 
        'autoplay': 0, 
        'controls': 0, 
        'modestbranding': 1,
        'rel': 0,
        'origin': window.location.origin // Keamanan tambahan untuk Iframe
      },
      events: {
        onReady: (event: any) => {
          setDuration(event.target.getDuration());
          event.target.setVolume(volume);
        },
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else {
            setIsPlaying(false);
          }
        }
      }
    });
  };

  useEffect(() => {
    // Jalankan timer jika musik sedang diputar
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          setCurrentTime(playerRef.current.getCurrentTime());
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    // Sinkronisasi Script YouTube SDK
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
      // Cleanup: Hentikan player jika komponen tidak lagi digunakan
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (playerRef.current) {
      playerRef.current.seekTo(time, true);
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (playerRef.current) {
      playerRef.current.setVolume(v);
    }
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-[700px] mx-auto scale-110 md:scale-125 my-20">
      <div className="flex items-center gap-3 px-6">
        <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`}></div>
        <span className="text-[12px] uppercase tracking-[0.5em] text-zinc-400 font-black">Favorite Song</span>
      </div>

      <div className="relative overflow-hidden rounded-[50px] bg-zinc-800/40 border border-zinc-700/50 backdrop-blur-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div id="youtube-player-final" className="hidden"></div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-56 h-56 md:w-64 md:h-64 flex-shrink-0 shadow-2xl">
            <div className={`absolute -inset-4 bg-white/5 rounded-[45px] blur-2xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Cover Art" 
              className={`relative w-full h-full object-cover rounded-[40px] border border-zinc-700 transition-all duration-1000 ${isPlaying ? 'scale-105 rotate-1' : 'scale-100'}`}
            />
          </div>

          <div className="flex-1 w-full space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-white tracking-tighter leading-none">Love Anthem</h3>
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-[0.3em] mt-3">LyoraChay · BrianVal · MW</p>
            </div>

            <div className="space-y-3">
              <input 
                type="range" 
                min="0" 
                max={duration || 100} 
                value={currentTime} 
                onChange={handleSeek} 
                className="w-full h-1.5 bg-zinc-700/50 rounded-full appearance-none cursor-pointer accent-white hover:accent-red-500 transition-all" 
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono font-black">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-10">
              <button className="text-zinc-500 hover:text-white transition-colors active:scale-90">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </button>

              <button 
                onClick={handleTogglePlay}
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-2xl"
              >
                {isPlaying ? (
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                ) : (
                  <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                )}
              </button>

              <button className="text-zinc-500 hover:text-white transition-colors active:scale-90">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"/></svg>
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4 group">
              <svg width="16" height="16" fill="currentColor" className="text-zinc-500 group-hover:text-white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={volume} 
                onChange={handleVolumeChange} 
                className="w-full h-1 bg-zinc-700/50 rounded-full appearance-none cursor-pointer accent-zinc-400 group-hover:accent-white transition-all" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
