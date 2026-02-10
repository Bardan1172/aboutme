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
    <div className="flex flex-col gap-8 w-full max-w-[850px] mx-auto my-20">
      {/* Header Label */}
      <div className="flex items-center gap-3 px-8">
        <div className={`w-2.5 h-2.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`}></div>
        <span className="text-[12px] uppercase tracking-[0.5em] text-zinc-400 font-black">Favorite Song</span>
      </div>

      {/* Main Container - Lebar (Wider) */}
      <div className="relative overflow-hidden rounded-[45px] bg-[#121212]/90 border border-zinc-800/50 backdrop-blur-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
        <div id="youtube-player-final" className="hidden"></div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Cover Art Section */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex-shrink-0">
            <div className={`absolute -inset-6 bg-red-500/5 rounded-[50px] blur-3xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            <img 
              src="/foto/music.png" 
              alt="Cover Art" 
              className={`relative w-full h-full object-cover rounded-[35px] border border-zinc-800 transition-all duration-1000 shadow-2xl ${isPlaying ? 'scale-105' : 'scale-100'}`}
            />
          </div>

          {/* Player Controls Section */}
          <div className="flex-1 w-full flex flex-col justify-center space-y-8">
            {/* Title & Artist */}
            <div className="text-center md:text-left">
              <h3 className="text-4xl font-bold text-white tracking-tighter">Love Anthem</h3>
              <p className="text-zinc-500 text-sm font-bold uppercase tracking-[0.4em] mt-3">LyoraChay · BrianVal · MW</p>
            </div>

            {/* Progress Bar & Real-time Duration */}
            <div className="space-y-4">
              <input 
                type="range" min="0" max={duration || 100} value={currentTime} onChange={handleSeek} 
                className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-white hover:accent-red-500 transition-all" 
              />
              <div className="flex justify-between text-[12px] text-zinc-500 font-mono font-bold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Play Button - Centered Below Duration */}
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-12">
                <button className="text-zinc-500 hover:text-white transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg></button>
                
                <button 
                  onClick={handleTogglePlay}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 active:scale-95 transition-all shadow-white/10 shadow-2xl"
                >
                  {isPlaying ? (
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                  ) : (
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </button>

                <button className="text-zinc-500 hover:text-white transition-colors"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"/></svg></button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-4 w-full max-w-[200px] group">
                <svg width="16" height="16" fill="currentColor" className="text-zinc-600 group-hover:text-white" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
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
