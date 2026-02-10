"use client";

import React from 'react';

export default function FavoriteSong() {
  // ID Video dari link yang kamu kasih (9btPvZdVRWY)
  const videoId = "9btPvZdVRWY";

  return (
    <div className="flex flex-col gap-6 w-full max-w-[550px] mx-auto">
      {/* Label Header dengan Indikator Hijau */}
      <div className="flex items-center gap-2 px-4">
        <div className="w-2 h-2 bg-[#1DB954] rounded-full animate-pulse"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Favorite Song</span>
      </div>

      {/* Music Player Card - Desain Apple Music / Spotify Hybrid */}
      <div className="relative overflow-hidden rounded-[35px] bg-[#1a1a1a]/80 border border-zinc-800 backdrop-blur-md p-6 md:p-8 shadow-2xl transition-all duration-500">
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          {/* Cover Art menggunakan Foto Profil Lokal */}
          <div className="relative w-44 h-44 flex-shrink-0 group">
            <div className="absolute -inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-[28px] blur-sm"></div>
            <img 
              src="/foto/foto-profile.jpg" 
              alt="Song Cover" 
              className="relative w-full h-full object-cover rounded-[25px] border border-zinc-700 shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Icon Spotify di pojok */}
            <div className="absolute top-3 right-3 text-white/90">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.302c-.215.353-.674.464-1.026.249-2.852-1.742-6.443-2.136-10.672-1.168-.404.093-.811-.159-.904-.563-.093-.404.159-.811.563-.904 4.634-1.06 8.604-.61 11.79 1.336.352.215.463.674.249 1.026zm1.465-3.26c-.27.439-.844.582-1.282.311-3.264-2.006-8.239-2.589-12.098-1.417-.494.15-.1.022-.249.27-.439.15-.022.25-.1.583-.311 4.385-2.695 9.878-2.043 13.626.259.439.27.583.844.311 1.282zm.128-3.414c-3.914-2.324-10.37-2.538-14.129-1.397-.6.182-1.242-.164-1.424-.764-.182-.6.164-1.242.764-1.424 4.313-1.31 11.439-1.054 15.938 1.616.54.32.716 1.014.396 1.554s-1.014.717-1.555.396z"/></svg>
            </div>
          </div>

          {/* Player Info & Control Section */}
          <div className="flex-1 w-full space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">everything u are</h3>
              <p className="text-zinc-400 text-sm font-medium mt-1">Hindia</p>
            </div>

            {/* YouTube Embed Player (Transparan/Hidden agar UI tetap bersih) */}
            <div className="rounded-xl overflow-hidden h-[48px] border border-zinc-700/50 bg-black/20">
              <iframe 
                src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&theme=dark`} 
                className="w-full h-full"
                title="YouTube Player"
                allow="autoplay; encrypted-media" 
              />
            </div>

            {/* Visual Progress Bar (Simulasi UI iOS) */}
            <div className="space-y-2">
              <div className="w-full h-1.5 bg-zinc-700/50 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-white rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] text-zinc-500 font-mono font-bold tracking-widest">
                <span>02:34</span>
                <span>03:56</span>
              </div>
            </div>

            {/* Simulated Playback Controls */}
            <div className="flex items-center justify-center md:justify-start gap-8 text-white/80">
              <button className="hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
              </button>
              {/* Tombol Play Dummy (Kontrol utama ada di Iframe atas) */}
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <button className="hover:text-white transition-colors">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"/></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
