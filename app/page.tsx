"use client";
import React from 'react';
import FavoriteSong from './FavoriteSong'; 
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-[#050505] text-zinc-300 selection:bg-blue-500/30">
      
      {/* SECTION 1: HERO */}
      <section className="snap-start h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-24 relative overflow-hidden">
        
        {/* Background Ambient Light */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Sisi Kiri: Teks & Info */}
          <div className="flex-1 text-center md:text-left space-y-8 order-2 md:order-1">
            <div className="flex gap-3 justify-center md:justify-start items-center">
               <div className="w-12 h-[2px] bg-blue-500"></div>
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Introduction</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              BARDAN<span className="text-blue-600">.</span>
            </h1>

            <p className="max-w-md text-zinc-400 text-sm md:text-lg leading-relaxed font-light">
              Every idea is an opportunity to create something great. I focus on building scalable, fast, and impactful web applications.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
              {['Next.js', 'React.js', 'Tailwind', 'Node.js'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:border-zinc-600 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 pt-6">
               <button className="px-10 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5">
                 View Portfolio
               </button>
               <button className="px-10 py-4 bg-zinc-900 border border-zinc-800 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-all">
                 Contact Me
               </button>
            </div>
          </div>

          {/* Sisi Kanan: Live Profile (GIF) */}
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex-shrink-0 order-1 md:order-2 group">
            <motion.div 
              initial={{ opacity: 0.5, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -inset-4 bg-blue-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000"
            />

            <div className="relative w-full h-full rounded-full border-[1px] border-zinc-800 p-4 md:p-6 bg-zinc-900/20 backdrop-blur-3xl">
              <div className="w-full h-full rounded-full overflow-hidden border border-zinc-700/50 shadow-2xl bg-zinc-950">
                <motion.img 
                  src="/foto/live.gif" 
                  alt="Live Profile"
                  initial={{ scale: 1.05, opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ 
                    opacity: { duration: 1 },
                    scale: { duration: 2, ease: "easeOut" } 
                  }}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/foto/foto-profile.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: IDENTITY */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-8 text-blue-500">
            <div className="w-10 h-px bg-blue-500"></div>
            <h2 className="text-xs font-black uppercase tracking-[0.5em]">Identity</h2>
          </div>
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-10 md:p-14 rounded-[50px] backdrop-blur-2xl text-justify">
            <p className="text-2xl md:text-4xl leading-tight text-white font-light tracking-tighter">
              "Seorang kreator yang bertumbuh di persimpangan kreativitas digital dan solusi teknologi. Fokus saya adalah membangun komunitas yang inklusif serta solusi web yang performan."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JOURNEY */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-[#030303] overflow-y-auto">
        <div className="max-w-3xl w-full py-20">
          <div className="flex items-center gap-3 mb-16 text-blue-500">
             <div className="w-10 h-px bg-blue-500"></div>
             <h2 className="text-xs font-black uppercase tracking-[0.5em]">The Journey</h2>
          </div>
          <div className="relative border-l border-zinc-900 ml-4 space-y-16">
            {[
              { year: '2023', title: 'The Beginning', desc: 'Memulai langkah sebagai YouTuber Bardan1172 melalui konten Minecraft. Bergabung dengan komunitas Lottacraft.' },
              { year: '2024', title: 'Building Roots', desc: 'Mendirikan komunitas BOCAH RONDA. Memperluas koneksi dengan bergabung ke Terrabear.' },
              { year: '2025', title: 'Professional Expansion', desc: 'Menjadi CS di Heppycloud. Aktif di clan HCX7 Bloodstrike dan merombak sistem Discord.' },
              { year: '2026', current: true, title: 'Innovation Era', desc: 'Merintis Selene Shop dan mendalami Fullstack Web Development modern.' }
            ].map((item, index) => (
              <div key={index} className="relative ml-10 group text-justify">
                <div className={`absolute -left-[49px] top-1 h-4 w-4 rounded-full border-4 border-[#030303] transition-all duration-500 ${item.current ? 'bg-blue-600 scale-150 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'bg-zinc-800'}`}></div>
                <h3 className={`text-[10px] font-black uppercase tracking-widest ${item.current ? 'text-blue-500' : 'text-zinc-600'}`}>
                  {item.year} — {item.title}
                </h3>
                <p className="mt-3 text-zinc-400 text-base md:text-lg leading-relaxed group-hover:text-zinc-100 transition-colors font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SOUNDTRACK */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center gap-4 mb-20 text-zinc-700">
              <div className="w-16 h-[1px] bg-zinc-900"></div>
              <h2 className="text-[10px] font-black uppercase tracking-[1.2em] ml-4">Soundtrack</h2>
          </div>
          <FavoriteSong />
        </div>
      </section>

      {/* SECTION 5: CONNECT */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-blue-600 mb-16">Get In Touch</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <SocialCard href="https://discord.gg/invite-code" title="Discord" subtitle="Bocah Ronda" color="hover:border-indigo-600" />
            <SocialCard href="https://github.com/Bardan1172" title="Github" subtitle="Repositories" color="hover:border-white" />
            <SocialCard href="https://youtube.com/@bardan1172" title="Youtube" subtitle="Video Content" color="hover:border-red-600" />
            <SocialCard href="https://www.instagram.com/bardan_1172/" title="Instagram" subtitle="Daily Life" color="hover:border-pink-600" />
            <SocialCard href="https://trakteer.id/bardan1172/tip" title="Trakteer" subtitle="Support Me" color="hover:border-yellow-600" />
            <SocialCard href="#" title="Selene Shop" subtitle="Coming Soon" color="hover:border-cyan-600" />
          </div>
          <footer className="mt-32">
            <p className="text-[9px] uppercase tracking-[0.8em] text-zinc-800 font-black">
              © {new Date().getFullYear()} BARDAN1172
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
      className={`group flex flex-col items-start gap-4 p-6 bg-zinc-900/20 border border-zinc-800/40 rounded-[32px] transition-all duration-500 hover:bg-zinc-900 backdrop-blur-md ${color}`}
    >
      <div className="w-full flex justify-between items-start">
        <div className="p-2 bg-zinc-800/50 rounded-xl group-hover:bg-zinc-800 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-zinc-500 group-hover:text-white transition-colors"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        </div>
      </div>
      <div className="text-left mt-2">
        <h3 className="text-sm font-bold text-zinc-100">{title}</h3>
        <p className="text-[9px] text-zinc-600 uppercase tracking-widest mt-1 font-bold">{subtitle}</p>
      </div>
    </a>
  );
}
