"use client";
import React from 'react';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-[#050505] text-zinc-300 selection:bg-blue-500/30">
      
      {/* SECTION 1: HERO */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/foto/foto-profile.jpg" 
            alt="Bardan" 
            className="relative w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border border-zinc-800 shadow-2xl"
          />
        </div>
        <h1 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight text-white">
          Bardan<span className="text-blue-500">.</span>
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">Content Creator</span>
          <span className="px-3 py-1 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">Web Developer</span>
          <span className="px-3 py-1 text-xs font-medium bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400">Entrepreneur</span>
        </div>
        <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2 text-zinc-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative text-center">
        <div className="max-w-2xl w-full">
          <div className="flex items-center justify-center gap-3 mb-6 text-blue-500">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Identity</h2>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 italic font-light">
              "Seorang kreator yang bertumbuh di persimpangan kreativitas digital dan solusi teknologi."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE JOURNEY */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-[#030303] overflow-y-auto">
        <div className="max-w-3xl w-full py-10">
          <div className="flex items-center gap-3 mb-12 text-blue-500 justify-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">The Journey</h2>
          </div>
          <div className="relative border-l border-zinc-800 ml-4 space-y-12">
            {[
              { year: '2023', title: 'The Creative Spark', desc: 'YouTube Bardan172 & Lottacraft.' },
              { year: '2024', title: 'Building Foundations', desc: 'BOCAH RONDA & Terrabear.' },
              { year: '2025', title: 'Professional Step', desc: 'CS Heppycloud & HCX7 Bloodstrike.' },
              { year: '2026', current: true, title: 'Innovation Era', desc: 'Selene Shop & Web Development.' }
            ].map((item, index) => (
              <div key={index} className="relative ml-8 group">
                <div className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-[#050505] ${item.current ? 'bg-green-500' : 'bg-blue-600'}`}></div>
                <h3 className={`text-xs font-bold uppercase ${item.current ? 'text-green-500' : 'text-zinc-500'}`}>{item.year} — {item.title}</h3>
                <p className="mt-2 text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MY PLAYLIST - THE 100% FIX */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-8 text-[#1DB954] justify-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Soundtrack</h2>
          </div>
          <div className="w-full rounded-[12px] overflow-hidden shadow-2xl bg-[#282828]">
            <iframe 
              src="https://open.spotify.com/embed/playlist/64qOqN6NshD8U7iOfi1vGk?utm_source=generator&theme=0" 
              width="100%" 
              height="380" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              style={{ minHeight: '380px' }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONNECT */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-12">Connect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SocialCard href="https://discord.gg/invite-code" title="Discord" color="hover:border-indigo-500" />
            <SocialCard href="https://github.com/Bardan1172" title="Github" color="hover:border-white" />
            <SocialCard href="https://youtube.com/@bardan1172" title="Youtube" color="hover:border-red-600" />
            <SocialCard href="https://www.instagram.com/bardan_1172/" title="Instagram" color="hover:border-pink-500" />
            <SocialCard href="https://trakteer.id/bardan1172/tip" title="Trakteer" color="hover:border-yellow-500" />
            <SocialCard href="#" title="Shop" color="hover:border-cyan-500" />
          </div>
          <footer className="mt-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">© {new Date().getFullYear()} BARDAN</p>
          </footer>
        </div>
      </section>
    </main>
  );
}

function SocialCard({ href, title, color }: { href: string, title: string, color: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`p-4 bg-zinc-900/30 border border-zinc-800 rounded-2xl transition-all ${color}`}>
      <h3 className="text-sm font-bold text-zinc-200">{title}</h3>
    </a>
  );
}
