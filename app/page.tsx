import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      {/* Profil Section */}
      <h1 className="text-4xl font-extrabold mb-2">Halo, saya [Nama Kamu]!</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-md">
        Seorang [Pekerjaan/Minat] yang fokus membangun hal-hal digital bermanfaat.
      </p>

      {/* Social Media Links */}
      <div className="flex gap-6">
        <a 
          href="https://instagram.com/username" 
          target="_blank" 
          className="hover:text-pink-500 transition-colors"
        >
          Instagram
        </a>
        <a 
          href="https://linkedin.com/in/username" 
          target="_blank" 
          className="hover:text-blue-500 transition-colors"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/username" 
          target="_blank" 
          className="hover:text-gray-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}
