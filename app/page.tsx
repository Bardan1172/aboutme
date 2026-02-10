import React from 'react';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      
      {/* SECTION 1: HOME */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="relative w-48 h-48 mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <img 
            src="/foto/foto-profile.jpg" 
            alt="Bardan" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase">
          BARDAN<span className="text-blue-600">.</span>
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium tracking-widest uppercase">
          Creator • CS @ Heppycloud • Web Dev
        </p>
        <div className="mt-12 animate-bounce text-zinc-400">
          <span className="text-2xl">↓</span>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center md:justify-start gap-4">
            <span className="h-1 w-12 bg-blue-600 hidden md:block"></span>
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              Halo! Saya adalah seorang kreator konten dan pengembang yang aktif di dunia komunitas gaming dan layanan digital. Berawal dari kecintaan pada Minecraft, saya kini fokus membangun ekosistem komunitas yang sehat dan merintis bisnis di bidang digital.
            </p>
            <p>
              Melalui <strong>Bocah Ronda</strong> dan <strong>Selene Shop</strong>, saya berusaha memberikan kontribusi positif bagi teman-teman di komunitas maupun pelanggan saya.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JEJAK PERJALANAN */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-950 overflow-y-auto">
        <div className="max-w-4xl w-full py-10">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4">
             <span className="h-1 w-12 bg-blue-600"></span>
             Jejak Perjalanan
          </h2>
          
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 space-y-8">
            {/* 2023 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-zinc-400"></span>
              <h3 className="text-xl font-bold">2023</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm md:text-base">
                Memulai karier YouTube sebagai <strong>Bardan172</strong>. Aktif membuat konten & live stream Minecraft, serta bergabung dengan komunitas <strong>Lottacraft</strong>.
              </p>
            </div>

            {/* 2024 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-zinc-400"></span>
              <h3 className="text-xl font-bold">2024</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm md:text-base">
                Mendirikan komunitas <strong>BOCAH RONDA</strong>. Di tahun yang sama, bergabung dengan komunitas Minecraft <strong>Terrabear</strong>.
              </p>
            </div>

            {/* 2025 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-blue-600"></span>
              <h3 className="text-xl font-bold">2025</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm md:text-base">
                Mengembangkan Discord Bocah Ronda & kembali live stream Multi-game. Bergabung dengan <strong>Heppycloud</strong> (CS), masuk clan <strong>HCX7</strong> di Bloodstrike.
              </p>
            </div>

            {/* 2026 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">2026 (Sekarang)</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-1 text-sm md:text-base">
                Membangun <strong>Selene Shop</strong>, mendalami kembali Web Dev, memulai live series <strong>Hytale</strong>, dan bergabung dengan komunitas <strong>Bloody</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900/30">
        <h2 className="text-3xl font-bold mb-10 text-center">Let's Connect</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <a href="https://www.instagram.com/bardan_1172/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-pink-500 transition-all text-center">
            <h3 className="font-bold text-pink-600">Instagram</h3>
            <p className="text-xs opacity-70">@bardan_1172</p>
          </a>

          <a href="https://www.tiktok.com/@bardan_1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 transition-all text-center">
            <h3 className="font-bold">TikTok</h3>
            <p className="text-xs opacity-70">@bardan_1172</p>
          </a>

          <a href="https://github.com/Bardan1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 text-white rounded-xl hover:bg-black transition-all text-center">
            <h3 className="font-bold text-blue-400">GitHub</h3>
            <p className="text-xs opacity-70">Bardan1172</p>
          </a>

          <a href="https://trakteer.id/bardan1172/tip" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-600 text-white rounded-xl hover:scale-105 transition-all text-center">
            <h3 className="font-bold">Trakteer</h3>
            <p className="text-xs">Support Me</p>
          </a>

          <a href="https://youtube.com/@bardan1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-700 text-white rounded-xl hover:scale-105 transition-all text-center">
            <h3 className="font-bold">YouTube</h3>
            <p className="text-xs">Bardan1172</p>
          </a>

          <a href="https://discord.gg/invite-code-kamu" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#5865F2] text-white rounded-xl hover:scale-105 transition-all text-center">
            <h3 className="font-bold">Discord</h3>
            <p className="text-xs italic">Bocah Ronda</p>
          </a>
        </div>

        <footer className="mt-16 text-zinc-400 text-sm">
          © {new Date().getFullYear()} Bardan • Built with Next.js
        </footer>
      </section>

    </main>
  );
}
