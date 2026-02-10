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
          Digital Creator • Service Expert • Web Developer
        </p>
        <div className="mt-12 animate-bounce text-zinc-400">
          <span className="text-2xl">↓</span>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-3xl w-full text-center md:text-left">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center md:justify-start gap-4 uppercase tracking-wider">
            <span className="h-1 w-12 bg-blue-600 hidden md:block"></span>
            About Me
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
            <p>
              Halo! Saya adalah seorang individu yang mendedikasikan waktu di persimpangan antara kreatifitas konten, manajemen komunitas, dan teknologi web. Berawal dari antusiasme di dunia gaming, saya berevolusi menjadi seorang profesional yang memahami kebutuhan teknis pengguna.
            </p>
            <p>
              Dari mengelola bantuan teknis di industri hosting hingga merintis unit bisnis mandiri, visi saya tetap sama: membangun ekosistem digital yang solutif, interaktif, dan berdampak positif bagi semua orang di dalamnya.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JEJAK PERJALANAN (EXPANDED) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-8 bg-white dark:bg-zinc-950 overflow-y-auto">
        <div className="max-w-4xl w-full py-10">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 uppercase tracking-wider">
             <span className="h-1 w-12 bg-blue-600"></span>
             Jejak Perjalanan
          </h2>
          
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 space-y-10">
            {/* 2023 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-zinc-400"></span>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 uppercase">2023 — The Creative Spark</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm md:text-base leading-relaxed">
                Memulai perjalanan profesional di YouTube dengan *branding* <strong>Bardan172</strong>. Saya aktif memproduksi konten Minecraft dan membangun interaksi melalui *live streaming*. Di tahun ini pula, saya mengasah kemampuan bersosialisasi dan kerjasama tim dengan bergabung di komunitas <strong>Lottacraft</strong>, yang menjadi batu loncatan awal saya dalam memahami dinamika komunitas gaming.
              </p>
            </div>

            {/* 2024 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-zinc-400"></span>
              <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-200 uppercase">2024 — Foundation of Community</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm md:text-base leading-relaxed">
                Menyadari pentingnya ruang berekspresi, saya mendirikan komunitas <strong>BOCAH RONDA</strong> sebagai tempat berkumpul yang inklusif untuk diskusi santai dan pertemanan. Tak berhenti di situ, saya memperluas wawasan manajemen server dengan bergabung ke komunitas <strong>Terrabear</strong>, memperdalam pemahaman saya tentang bagaimana sebuah komunitas besar dapat dikelola secara konsisten.
              </p>
            </div>

            {/* 2025 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]"></span>
              <h3 className="text-xl font-bold text-blue-600 uppercase">2025 — Professional Expansion</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm md:text-base leading-relaxed">
                Transformasi besar terjadi saat saya diangkat menjadi <strong>Customer Service (CS)</strong> di <strong>Heppycloud</strong>, salah satu penyedia hosting terkemuka. Peran ini menuntut saya menguasai penyelesaian masalah teknis server secara cepat demi kepuasan pelanggan. Secara bersamaan, saya memperkuat eksistensi di Discord Bocah Ronda, bergabung dengan clan <strong>HCX7</strong> di Bloodstrike, dan kembali aktif *streaming* dengan konsep konten yang lebih matang.
              </p>
            </div>

            {/* 2026 */}
            <div className="relative ml-6">
              <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-green-500 animate-pulse"></span>
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 uppercase">2026 — Innovation & Business</h3>
              <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm md:text-base leading-relaxed">
                Saat ini, saya sedang merintis <strong>Selene Shop</strong>, sebuah unit bisnis digital bersama rekan-rekan. Saya juga kembali mendalami <strong>Web Development</strong>—seni membangun dan memelihara website agar tetap performan dan modern secara visual. Di dunia konten, saya meluncurkan series <strong>Hytale</strong> dan mempererat sinergi dengan komunitas <strong>Bloody</strong> sebagai komitmen saya untuk terus relevan di industri ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900/30">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase tracking-[0.2em]">Connect With Me</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          <a href="https://www.instagram.com/bardan_1172/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-pink-500 transition-all text-center group shadow-sm hover:shadow-md">
            <h3 className="font-bold text-pink-600 group-hover:scale-105 transition-transform">Instagram</h3>
            <p className="text-xs opacity-70">@bardan_1172</p>
          </a>

          <a href="https://www.tiktok.com/@bardan_1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-400 transition-all text-center group shadow-sm hover:shadow-md">
            <h3 className="font-bold group-hover:scale-105 transition-transform">TikTok</h3>
            <p className="text-xs opacity-70">@bardan_1172</p>
          </a>

          <a href="https://github.com/Bardan1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-zinc-900 text-white border border-zinc-800 rounded-xl hover:bg-black transition-all text-center group shadow-lg">
            <h3 className="font-bold text-blue-400 group-hover:scale-105 transition-transform">GitHub</h3>
            <p className="text-xs opacity-70">Bardan1172</p>
          </a>

          <a href="https://trakteer.id/bardan1172/tip" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-600 text-white rounded-xl hover:scale-105 transition-all text-center group">
            <h3 className="font-bold group-hover:scale-105 transition-transform">Trakteer</h3>
            <p className="text-xs">Support My Content</p>
          </a>

          <a href="https://youtube.com/@bardan1172" target="_blank" rel="noopener noreferrer" className="p-4 bg-red-700 text-white rounded-xl hover:scale-105 transition-all text-center group">
            <h3 className="font-bold group-hover:scale-105 transition-transform">YouTube</h3>
            <p className="text-xs">Bardan1172</p>
          </a>

          <a href="https://discord.gg/invite-code-kamu" target="_blank" rel="noopener noreferrer" className="p-4 bg-[#5865F2] text-white rounded-xl hover:scale-105 transition-all text-center group shadow-indigo-500/20 shadow-lg">
            <h3 className="font-bold group-hover:scale-105 transition-transform">Discord</h3>
            <p className="text-xs italic opacity-80 uppercase font-semibold">Bocah Ronda</p>
          </a>
        </div>

        <footer className="mt-16 text-zinc-400 text-xs md:text-sm tracking-wide">
          © {new Date().getFullYear()} BARDAN • Always Learning, Always Creating.
        </footer>
      </section>

    </main>
  );
}
