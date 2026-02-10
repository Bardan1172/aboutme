import React from 'react';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white">
      
      {/* SECTION 1: HOME (FOTO & NAMA) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="relative w-48 h-48 mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          {/* Path diubah sesuai lokasi file kamu */}
          <img 
            src="/foto/foto-profile.jpg" 
            alt="Bardan" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
          BARDAN<span className="text-blue-600">.</span>
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
          Web Developer & Creator
        </p>
        <div className="mt-12 animate-bounce">
          <p className="text-sm text-zinc-400">Scroll down</p>
          <span className="text-2xl">↓</span>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <span className="h-1 w-12 bg-blue-600"></span>
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
            <p>
              Halo! Saya adalah seseorang yang antusias dengan dunia teknologi dan kreatifitas digital. 
              Saya senang membangun platform yang tidak hanya fungsional tetapi juga memiliki visual yang menarik.
            </p>
            <p>
              Fokus utama saya saat ini adalah mengembangkan aplikasi web menggunakan teknologi modern 
              seperti React dan Next.js, sambil terus mengeksplorasi hal-hal baru di dunia coding.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-950">
        <h2 className="text-3xl font-bold mb-10">Connect With Me</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Instagram */}
          <a href="https://www.instagram.com/bardan_1172/" target="_blank" rel="noopener noreferrer" 
            className="group p-5 bg-gradient-to-br from-purple-600/10 to-pink-500/10 border border-pink-500/20 rounded-2xl hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-bold text-pink-600">Instagram</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@bardan_1172" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-bold">TikTok</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Bardan1172" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-zinc-900 text-white rounded-2xl hover:scale-[1.02] transition-all flex flex-col justify-center border border-zinc-800">
            <h3 className="text-xl font-bold">GitHub</h3>
            <p className="text-sm opacity-70">Bardan1172</p>
          </a>

          {/* Trakteer */}
          <a href="https://trakteer.id/bardan1172/tip" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-red-600 text-white rounded-2xl hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-bold">Trakteer</h3>
            <p className="text-sm opacity-90">Support my work</p>
          </a>

          {/* YouTube */}
          <a href="https://youtube.com/@bardan1172" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-red-700 text-white rounded-2xl hover:scale-[1.02] transition-all">
            <h3 className="text-xl font-bold">YouTube</h3>
            <p className="text-sm opacity-90">Subscribe</p>
          </a>

          {/* Discord - Bocah Ronda */}
          <a href="https://discord.gg/invite-code-kamu" target="_blank" rel="noopener noreferrer" 
            className="p-5 bg-[#5865F2] text-white rounded-2xl hover:scale-[1.02] transition-all shadow-lg shadow-indigo-500/20">
            <h3 className="text-xl font-bold">Discord</h3>
            <p className="text-sm opacity-90 font-medium italic">Bocah Ronda</p>
          </a>
        </div>

        <footer className="mt-16 text-zinc-400 text-sm">
          © {new Date().getFullYear()} Bardan. Built with Next.js
        </footer>
      </section>

    </main>
  );
}
