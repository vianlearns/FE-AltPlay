import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_40px_-10px_rgba(76,214,255,0.08)]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1920px] mx-auto relative">
        <a href="/" aria-label="Beranda ALTPLAY" className="flex items-center gap-3 group">
          <img src="/ALTPLAY-logo.webp" alt="ALTPLAY Logo" width="32" height="32" className="h-7 md:h-8 w-auto brightness-0 invert transition-transform group-hover:scale-110" />
          <div className="text-xl md:text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 font-headline uppercase">
            ALTPLAY
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/">Beranda</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/harga">Harga</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/beli">Deploy</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/auth">Client Area</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/contact">Kontak</a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden lg:flex items-center gap-4 text-zinc-500">
            <button aria-label="Notifikasi" className="material-symbols-outlined hover:bg-white/5 p-2 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto">notifications</button>
            <button aria-label="Pengaturan" className="material-symbols-outlined hover:bg-white/5 p-2 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto">settings</button>
          </div>
          <a href="/auth" className="hidden sm:inline-block bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 font-headline font-bold text-sm tracking-tight uppercase active:scale-95 transition-transform rounded-sm border border-primary-fixed-dim/30 pointer-events-auto shadow-[0_0_15px_rgba(0,209,255,0.2)] hover:shadow-[0_0_25px_rgba(0,209,255,0.4)]">
            Login
          </a>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu Mobile"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden flex items-center justify-center p-2 text-zinc-300 hover:text-white transition-colors pointer-events-auto border border-white/5 rounded-lg bg-white/5 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span aria-hidden="true" className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out absolute w-full bg-[#131313]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden shadow-2xl ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 flex flex-col gap-6 items-center text-center">
          <a onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-primary transition-colors font-headline tracking-wider uppercase font-bold text-lg w-full py-2" href="/">Beranda</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-primary transition-colors font-headline tracking-wider uppercase font-bold text-lg w-full py-2" href="/harga">Harga</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-primary transition-colors font-headline tracking-wider uppercase font-bold text-lg w-full py-2" href="/beli">Deploy</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-primary transition-colors font-headline tracking-wider uppercase font-bold text-lg w-full py-2" href="/auth">Client Area</a>
          <a onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-primary transition-colors font-headline tracking-wider uppercase font-bold text-lg w-full py-2" href="/contact">Kontak</a>
          <div className="pt-6 border-t border-white/10 w-full">
            <a href="/auth" className="w-full block bg-primary text-on-primary-container px-6 py-4 font-headline font-bold text-sm tracking-widest text-[16px] uppercase active:scale-95 transition-all rounded-lg shadow-[0_0_20px_-5px_rgba(0,209,255,0.4)]">
              Masuk / Daftar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
