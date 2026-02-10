"use client";
import React from 'react';
import { 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  ExternalLink, 
  Code2, 
  User2, 
  History,
  ArrowDownCircle,
  Coffee
} from 'lucide-react';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-[#050505] text-zinc-300 selection:bg-blue-500/30">
      
      {/* SECTION 1: HERO */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Glow Decor */}
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
          <ArrowDownCircle size={20} className="text-zinc-600" />
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 relative">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-3 mb-6 text-blue-500">
            <User2 size={24} />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Identity</h2>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-3xl backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 italic font-light">
              "Seorang kreator yang bertumbuh di persimpangan kreativitas digital dan solusi teknologi. Fokus saya adalah membangun komunitas yang inklusif serta solusi web yang performan."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TIMELINE (EXPANDED) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-[#030303] overflow-y-auto">
        <div className="max-w-3xl w-full py-10">
          <div className="flex items-center gap-3 mb-12 text-blue-500">
            <History size={24} />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">The Journey</h2>
          </div>
          
          <div className="relative border-l border-zinc-800 ml-4 space-y-12">
            {[
              { 
                year: '2023', 
                title: 'The Beginning', 
                desc: 'Memulai langkah sebagai YouTuber Bardan172 melalui konten Minecraft. Bergabung dengan komunitas Lottacraft sebagai fondasi awal memahami manajemen komunitas.' 
              },
              { 
                year: '2024', 
                title: 'Building Roots', 
                desc: 'Mendirikan komunitas BOCAH RONDA. Memperluas koneksi dengan bergabung ke Terrabear untuk mendalami operasional komunitas skala besar.' 
              },
              { 
                year: '2025', 
                title: 'Professional Expansion', 
                desc: 'Diangkat menjadi CS Heppycloud (Dukungan teknis server). Aktif di clan HCX7 Bloodstrike dan merombak total sistem Discord Bocah Ronda.' 
              },
              { 
                year: '2026', 
                current: true,
                title: 'Innovation Era', 
                desc: 'Merintis Selene Shop dan mendalami Web Development (Modern App Stack). Meluncurkan Hytale series bersama komunitas Bloody.' 
              }
            ].map((item, index) => (
              <div key={index} className="relative ml-8 group">
                <div className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-[#050505] transition-colors ${item.current ? 'bg-green-500' : 'bg-blue-600'}`}></div>
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
            <Code2 size={24} />
            <h2 className="text-sm font-bold uppercase tracking-[0.3em]">Connect</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SocialCard href="https://discord.gg/invite-code" icon={<MessageSquare size={18}/>} title="Discord" subtitle="Bocah Ronda" color="hover:border-indigo-500" />
            <SocialCard href="https://github.com/Bardan1172" icon={<Github size={18}/>} title="Github" subtitle="Repositories" color="hover:border-white" />
            <SocialCard href="https://youtube.com/@bardan1172" icon={<Youtube size={18}/>} title="Youtube" subtitle="Video Content" color="hover:border-red-600" />
            <SocialCard href="https://www.instagram.com/bardan_1172/" icon={<Instagram size={18}/>} title="Instagram" subtitle="Daily Life" color="hover:border-pink-500" />
            <SocialCard href="https://trakteer.id/bardan1172/tip" icon={<Coffee size={18}/>} title="Trakteer" subtitle="Support Me" color="hover:border-yellow-500" />
            <SocialCard href="#" icon={<ExternalLink size={18}/>} title="Selene Shop" subtitle="Coming Soon" color="hover:border-cyan-500" />
          </div>
          
          <footer className="mt-20 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold">
              © {new Date().getFullYear()} BARDAN × NEXTJS 15
            </p>
          </footer>
        </div>
      </section>

    </main>
  );
}

function SocialCard({ href, icon, title, subtitle, color }: { href: string, icon: any, title: string, subtitle: string, color: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl transition-all duration-300 hover:bg-zinc-900 ${color}`}
    >
      <div className="w-10 h-10 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-zinc-200">{title}</h3>
        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">{subtitle}</p>
      </div>
      <ExternalLink size={14} className="text-zinc-700 group-hover:text-zinc-400" />
    </a>
  );
}
