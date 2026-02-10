"use client";
import React from 'react';
// PENTING: Karena naruhnya di folder app, panggilnya seperti ini:
import SpotifyPlayer from './SpotifyPlayer'; 

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-[#050505] text-zinc-300 selection:bg-blue-500/30">
      
      {/* --- SECTION 1, 2, 3 tetap sama --- */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white text-center">
          Bardan<span className="text-blue-500">.</span>
        </h1>
      </section>

      {/* SECTION 4: MY PLAYLIST */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-8 text-[#1DB954] justify-center">
             <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Soundtrack</h2>
          </div>
          
          {/* MEMANGGIL KOMPONEN DARI FILE SEBELAH */}
          <SpotifyPlayer />
          
        </div>
      </section>

      {/* --- SECTION 5: CONNECT --- */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
           <SocialCard href="https://github.com/Bardan1172" title="Github" />
           <SocialCard href="https://youtube.com/@bardan1172" title="Youtube" />
           <SocialCard href="https://www.instagram.com/bardan_1172/" title="Instagram" />
        </div>
      </section>
    </main>
  );
}

function SocialCard({ href, title }: { href: string, title: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-2xl text-center hover:bg-zinc-900 transition-all">
      <h3 className="text-sm font-bold text-zinc-200">{title}</h3>
    </a>
  );
}
