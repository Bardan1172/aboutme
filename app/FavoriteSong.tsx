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

  useEffect(() => {
    // 1. Load YouTube SDK
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: '9btPvZdVRWY',
        playerVars: { 'autoplay': 0, 'controls': 0, 'modestbranding': 1 },
        events: {
          onReady: (event: any) => {
            setDuration(event.target.getDuration());
            event.target.setVolume(volume);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startTimer();
            } else {
              setIsPlaying(false);
              stopTimer();
            }
          }
        }
      });
    };
  }, []);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        setCurrentTime(playerRef.current.getCurrentTime());
      }
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleTogglePlay = () => {
    if (isPlaying) playerRef.current.pauseVideo();
    else playerRef.current.playVideo();
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    playerRef.current.seekTo(time, true);
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    playerRef.current.setVolume(v);
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[450px] mx-auto">
      <div className="flex items-center gap-2 px-4">
        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`}></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Favorite Song</span>
      </div>

      <div className="relative overflow-hidden rounded-[40px] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl p-8 shadow-2xl">
        <div id="youtube-player" className="hidden"></div>

        <div className="flex flex-col items-center gap-6">
          {/* Cover Art */}
          <div className="relative w-40 h-40 shadow-2xl group">
            <img src="/foto/music.png" alt="Cover" className={`w-full h-full object-cover rounded-[30px] border border-zinc-700 transition-all duration-700 ${isPlaying ? 'scale-105 shadow-red-500/10 shadow-2xl' : ''}`} />
          </div>

          <div className="w-full text-center space-y-6">
            <div>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">everything u are</h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">Hindia</p>
            </div>

            {/* Real-time Progress Bar */}
            <div className="space-y-2">
              <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek} className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500" />
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono font-bold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8">
              <button onClick={handleTogglePlay} className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black hover:scale-110 transition-all shadow-xl">
                {isPlaying ? <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> : <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="ml-1"><path d="M8 5v14l11-7z"/></svg>}
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center gap-3 pt-2 group">
              <svg width="14" height="14" fill="currentColor" className="text-zinc-500 group-hover:text-red-500" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
              <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} className="w-24 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-400 group-hover:accent-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
