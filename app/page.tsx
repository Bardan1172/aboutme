import Image from "next/image";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      
      {/* SECTION 1: HOME (Foto & Nama) */}
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-white dark:bg-black p-4">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-200">
          {/* Ganti src dengan file foto kamu di folder public */}
          <img 
            src="/foto-profil.jpg" 
            alt="Foto Saya" 
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold tracking-tight">Halo, Saya <span className="text-blue-600">[Nama Kamu]</span></h1>
        <p className="mt-4 text-gray-500 animate-bounce text-sm">Scroll ke bawah ↓</p>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900 p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Saya adalah seorang kreator yang berfokus pada pengembangan web dan desain. 
            Saya memiliki ketertarikan besar dalam membangun aplikasi yang user-friendly 
            serta belajar teknologi baru setiap harinya.
          </p>
        </div>
      </section>

      {/* SECTION 3: SOCIAL MEDIA */}
      <section className="snap-start h-screen flex flex-col items-center justify-center bg-blue-600 text-white p-8">
        <h2 className="text-3xl font-bold mb-10">Mari Berteman!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl text-center">
          <a href="#" className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
            <p className="font-bold text-xl">Instagram</p>
            <p className="text-sm opacity-80">@username</p>
          </a>
          <a href="#" className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
            <p className="font-bold text-xl">LinkedIn</p>
            <p className="text-sm opacity-80">Nama Lengkap</p>
          </a>
          <a href="#" className="p-6 bg-white/10 rounded-2xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
            <p className="font-bold text-xl">GitHub</p>
            <p className="text-sm opacity-80">github-kamu</p>
          </a>
        </div>
      </section>

    </main>
  );
}
