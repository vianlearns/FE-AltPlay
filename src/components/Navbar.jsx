export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_40px_-10px_rgba(76,214,255,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1920px] mx-auto">
        <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 font-headline uppercase">
          ALTPLAY
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/">Beranda</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/pricing">Harga</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/configure">Deploy</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/server">Dashboard</a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline tracking-tight uppercase text-sm" href="/contact">Kontak</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-zinc-500">
            <span className="material-symbols-outlined hover:bg-white/5 p-2 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto">notifications</span>
            <span className="material-symbols-outlined hover:bg-white/5 p-2 rounded-full cursor-pointer transition-all duration-300 pointer-events-auto">settings</span>
          </div>
          <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 font-headline font-bold text-sm tracking-tight uppercase active:scale-95 transition-transform rounded-sm border border-primary-fixed-dim/30 pointer-events-auto">
            Luncurkan Server
          </button>
        </div>
      </div>
    </nav>
  );
}
