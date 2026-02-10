"use client";

import React, { useState, useRef, useEffect } from 'react';

export default function FavoriteSong() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Update durasi saat metadata dimuat
  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  // Update waktu berjalan
  const onTimeUpdate = () => {
    if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => alert("Klik lagi untuk memutar!"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVolume(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full max-w-[450px] mx-auto bg-[#0c0c0e]/80 border border-zinc-800/50 rounded-[32px] p-8 shadow-2xl backdrop-blur-md">
      {/* Cover Art */}
      <div className="relative aspect-square w-full mb-8 overflow-hidden rounded-2xl shadow-inner group">
        <img 
          src="/foto/music.png" 
          alt="Cover Art" 
          className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-out ${isPlaying ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Info Lagu */}
      <div className="text-center mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">Love Anthem</h3>
        <p className="text-zinc-500 text-sm font-medium mt-1 uppercase tracking-widest">Bardan's Choice</p>
      </div>

      {/* Controls Utama */}
      <div className="flex items-center justify-center gap-8 mb-10">
        <button className="text-zinc-500 hover:text-white transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
        </button>
        
        <button 
          onClick={togglePlay}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          {isPlaying ? (
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="ml-1"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>

        <button className="text-zinc-500 hover:text-white transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"/></svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <input 
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
        <div className="flex justify-between text-[10px] text-zinc-500 font-mono uppercase tracking-tighter">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume Control */}
      <div className="mt-8 flex items-center justify-center gap-3 group">
        <svg width="16" height="16" fill="currentColor" className="text-zinc-500" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        <input 
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-400 group-hover:accent-red-500"
        />
      </div>

      <audio 
        ref={audioRef} 
        src="/foto/Love-Anthem.mp3" 
        onLoadedMetadata={onLoadedMetadata}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />
    </div>
  );
}
