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
          Digital Creator & Developer
        </p>
        <div className="mt-12 animate-bounce text-zinc-400">
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
              Halo! Saya adalah seorang kreator konten dan pengembang yang senang bereksperimen di berbagai platform digital. 
              Fokus saya adalah menciptakan sesuatu yang bermanfaat dan menghibur bagi komunitas.
            </p>
            <p>
              Dari membangun server komunitas hingga mengembangkan website, saya selalu berusaha untuk 
              tetap relevan dengan tren teknologi terbaru dan terus berbagi melalui media sosial.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JEJAK PERJALANAN (MULTICHANNEL) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
             <span className="h-1 w-12 bg-blue-600"></span>
             Jejak Perjalanan
          </h2>
          
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4">
            {/* 2023 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
              <h3 className="text-xl font-bold">2023 - Awal Eksplorasi</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Memulai perjalanan di YouTube dan Instagram. Fokus pada pembuatan konten kreatif dan mulai belajar dasar-dasar coding untuk pertama kalinya.
              </p>
            </div>

            {/* 2024 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-purple-500"></span>
              <h3 className="text-xl font-bold">2024 - Memperluas Jangkauan</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Mulai aktif di TikTok dan membangun repositori di GitHub. Tahun di mana saya lebih serius mendalami Web Development dan integrasi komunitas.
              </p>
            </div>

            {/* 2025 */}
            <div className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">2025 s/d Sekarang</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Membangun ekosistem <strong>Bocah Ronda</strong> di Discord sebagai wadah komunitas. Terus konsisten update konten dan project di semua platform sosial media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900/30">
        <h2 className="text-3xl font-bold mb-10 text-center">Let's Connect</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          {/* Instagram */}
          <a href="https://www.instagram.com/bardan_1172/" target="_blank" rel="noopener noreferrer" 
            className="group p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-pink-500 transition-all shadow-sm">
            <h3 className="text-xl font-bold text-pink-600">Instagram</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@bardan_1172" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 transition-all shadow-sm">
            <h3 className="text-xl font-bold">TikTok</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/Bardan1172" target="_blank" rel="noopener noreferrer"
            className="p-5 bg-zinc-900 text-white rounded-2xl hover:bg-black transition-all border border-zinc-800 shadow-lg">
