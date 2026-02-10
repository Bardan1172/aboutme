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

        <div className="absolute bottom-10 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Scroll Exploration</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-6 text-blue-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Identity</h2>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 italic font-light text-justify">
              "Seorang kreator yang bertumbuh di persimpangan kreativitas digital dan solusi teknologi. Fokus saya adalah membangun komunitas yang inklusif serta solusi web yang performan."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JOURNEY */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-[#030303] overflow-y-auto">
        <div className="max-w-3xl w-full py-10">
          <div className="flex items-center gap-3 mb-12 text-blue-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">The Journey</h2>
          </div>
          
          <div className="relative border-l border-zinc-800 ml-4 space-y-12 text-justify">
            {[
              { year: '2023', title: 'The Beginning', desc: 'Memulai langkah sebagai YouTuber Bardan172 melalui konten Minecraft. Bergabung dengan komunitas Lottacraft sebagai fondasi awal memahami manajemen komunitas.' },
              { year: '2024', title: 'Building Roots', desc: 'Mendirikan komunitas BOCAH RONDA sebagai tempat diskusi santai. Memperluas koneksi dengan bergabung ke Terrabear untuk mendalami operasional komunitas skala besar.' },
              { year: '2025', title: 'Professional Expansion', desc: 'Menjadi Customer Service (CS) di Heppycloud, membantu solusi teknis server pelanggan. Aktif di clan HCX7 Bloodstrike dan merombak sistem Discord komunitas.' },
              { year: '2026', current: true, title: 'Innovation Era', desc: 'Merintis Selene Shop dan mendalami Web Development (proses membangun website modern). Meluncurkan Hytale series bersama komunitas Bloody.' }
            ].map((item, index) => (
              <div key={index} className="relative ml-8 group">
                <div className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-[#050505] transition-colors ${item.current ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-blue-600'}`}></div>
                <h3 className={`text-xs font-bold uppercase tracking-widest ${item.current ? 'text-green-500' : 'text-zinc-500'}`}>
                  {item.year} — {item.title}
                </h3>
                <p className="mt-2 text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIALS */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="max-w-4xl w-full">
          <div className="flex items-center justify-center gap-3 mb-12 text-blue-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Connect</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SocialCard href="https://discord.gg/invite-code" title="Discord" subtitle="Bocah Ronda" color="hover:border-indigo-500" />
            <SocialCard href="https://github.com/Bardan1172" title="Github" subtitle="Repositories" color="hover:border-white" />
            <SocialCard href="https://youtube.com/@bardan1172" title="Youtube" subtitle="Video Content" color="hover:border-red-600" />
            <SocialCard href="https://www.instagram.com/bardan_1172/" title="Instagram" subtitle="Daily Life" color="hover:border-pink-500" />
            <SocialCard href="https://trakteer.id/bardan1172/tip" title="Trakteer" subtitle="Support Me" color="hover:border-yellow-500" />
            <SocialCard href="#" title="Selene Shop" subtitle="Coming Soon" color="hover:border-cyan-500" />
          </div>
          
          <footer className="mt-20 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">
              © {new Date().getFullYear()} BARDAN × NEXTJS
            </p>
          </footer>
        </div>
      </section>

    </main>
  );
}

function SocialCard({ href, title, subtitle, color }: { href: string, title: string, subtitle: string, color: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl transition-all duration-300 hover:bg-zinc-900 ${color}`}
    >
      <div className="flex-1">
        <h3 className="text-sm font-bold text-zinc-200">{title}</h3>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{subtitle}</p>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-700 group-hover:text-zinc-400"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    </a>
  );
}
