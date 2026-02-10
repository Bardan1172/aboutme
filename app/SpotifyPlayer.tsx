"use client";

import React from 'react';

export default function SpotifyPlayer() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Container Utama UI Kustom */}
      <div className="relative overflow-hidden bg-[#121212] rounded-3xl border border-zinc-800 shadow-2xl p-6 md:p-12 flex flex-col md:flex-row items-center gap-10">
        
        {/* Efek Cahaya Hijau (Glow) di sisi kanan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] pointer-events-none"></div>

        {/* Info Lagu */}
        <div className="flex-1 z-10 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-8 font-bold">Nothing Song</p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
            Dan...
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10">Sheila On 7</p>

          {/* Progress Bar Visual */}
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-white w-1/3 animate-[progress_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>

        {/* Album Art */}
        <div className="relative z-10">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition duration-500">
            <img 
              src="https://i.scdn.co/image/ab67616d0000b273e670417935f088673856b372" 
              alt="Album Art" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Kontrol Samping */}
        <div className="flex flex-col gap-6 text-zinc-400 z-10">
          <button className="hover:text-white transition"><DotsIcon /></button>
          <button className="hover:text-white transition"><ShareIcon /></button>
          <button className="text-[#1DB954]"><CheckIcon /></button>
        </div>

        {/* PLAYER ASLI (Disembunyikan tapi berfungsi memutar suara) */}
        {/* Tambahkan allow="autoplay" agar langsung bunyi */}
        <div className="absolute opacity-0 pointer-events-none">
          <iframe
            src="https://open.spotify.com/embed/track/6openSpotifyLinkAnda?utm_source=generator&autoplay=1"
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Komponen Icon
const DotsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
const ShareIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>;
const CheckIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.53 9.53l-5 5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06L11 14.94l4.47-4.47a.75.75 0 111.06 1.06z"/></svg>;
