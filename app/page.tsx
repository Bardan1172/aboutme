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
          <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
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

      {/* SECTION 3: JEJAK PERJALANAN (UPDATED 2026) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-950">
        <div className="max-w-3xl w-full">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
             <span className="h-1 w-12 bg-blue-600"></span>
             Jejak Perjalanan
          </h2>
          
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4">
            {/* 2023-2024 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-zinc-400"></span>
              <h3 className="text-xl font-bold italic text-zinc-500">2023 - 2024</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Fase awal eksplorasi di YouTube dan Instagram. Mulai membangun fondasi di GitHub dan mempelajari dasar-dasar pengembangan web.
              </p>
            </div>

            {/* 2025 */}
            <div className="mb-10 ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></span>
              <h3 className="text-xl font-bold text-blue-600">2025</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2">
                Tahun ekspansi besar ke TikTok. Peresmian komunitas <strong>Bocah Ronda</strong> di Discord dan penguatan personal branding di seluruh kanal sosial media.
              </p>
            </div>

            {/* 2026 */}
            <div className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400">2026 (Sekarang)</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 font-medium">
                Berfokus pada skalabilitas komunitas dan integrasi teknologi AI dalam konten kreatif. Terus aktif mengembangkan project open-source dan memperluas jaringan kolaborasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900/30">
        <h2 className="text-3xl font-bold mb-10 text-center">Let's Connect</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
          <a href="https://www.instagram.com/bardan_1172/" target="_blank" rel="noopener noreferrer" className="group p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-pink-500 transition-all shadow-sm text-center">
            <h3 className="text-xl font-bold text-pink-600">Instagram</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          <a href="https://www.tiktok.com/@bardan_1172" target="_blank" rel="noopener noreferrer" className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-zinc-400 transition-all shadow-sm text-center">
            <h3 className="text-xl font-bold">TikTok</h3>
            <p className="text-sm opacity-70">@bardan_1172</p>
          </a>

          <a href="https://github.com/Bardan1172" target="_blank" rel="noopener noreferrer" className="p-5 bg-zinc-900 text-white rounded-2xl hover:bg-black transition-all border border-zinc-800 shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-400">GitHub</h3>
            <p className="text-sm opacity-70">Bardan1172</p>
          </a>

          <a href="https://trakteer.id/bardan1172/tip" target="_blank" rel="noopener noreferrer" className="p-5 bg-red-600 text-white rounded-2xl hover:scale-[1.02] transition-all text-center">
            <h3 className="text-xl font-bold">Trakteer</h3>
            <p className="text-sm opacity-90">Support my work</p>
          </a>

          <a href="https://youtube.com/@bardan1172" target="_blank" rel="noopener noreferrer" className="p-5 bg-red-700 text-white rounded-2xl hover:scale-[1.02] transition-all text-center">
            <h3 className="text-xl font-bold">YouTube</h3>
            <p className="text-sm opacity-90">Subscribe</p>
          </a>

          <a href="https://discord.gg/invite-code-kamu" target="_blank" rel="noopener noreferrer" className="p-5 bg-[#5865F2] text-white rounded-2xl hover:scale-[1.02] transition-all shadow-lg text-center">
            <h3 className="text-xl font-bold">Discord</h3>
            <p className="text-sm opacity-90 italic">Bocah Ronda</p>
          </a>
        </div>

        <footer className="mt-16 text-zinc-400 text-sm">
          © {new Date().getFullYear()} Bardan. Crafted with Next.js
        </footer>
      </section>

    </main>
  );
}
