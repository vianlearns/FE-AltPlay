export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">
        <div className="space-y-6 max-w-sm w-full">
          <div className="flex items-center gap-3">
            <img src="/ALTPLAY-logo.png" alt="ALTPLAY Logo" className="h-8 w-auto brightness-0 invert" />
            <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 font-headline uppercase">
              ALTPLAY
            </div>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed font-body">
            Provider hosting Minecraft dengan performa gila-gilaan dan hardware kelas atas. Dibuat untuk komunitas yang ingin performa tanpa kompromi.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-surface-container-lowest bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Dipercaya 500+ Server Owner</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 w-full lg:w-auto">
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface">Navigasi</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-body">
              <li><a href="/" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="/harga" className="hover:text-primary transition-colors">Harga Paket</a></li>
              <li><a href="/beli" className="hover:text-primary transition-colors">Deploy Server</a></li>
              <li><a href="/server" className="hover:text-primary transition-colors">Client Area</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface">Bantuan</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-body">
              <li><a href="/contact" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
              <li><a href="https://discord.gg/altplay" className="hover:text-primary transition-colors">Buka Tiket</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="/server" className="hover:text-primary transition-colors">Status Node</a></li>
            </ul>
          </div>
          <div className="space-y-6 col-span-2 md:col-span-1">
            <h4 className="font-headline font-bold text-xs uppercase tracking-[0.2em] text-on-surface">Kontak</h4>
            <ul className="space-y-3 text-sm text-zinc-400 font-body">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                <span>support@altplay.io</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
                <span>Semarang, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] text-center md:text-left">
        <div className="space-y-1">
          <p>© 2026 ALTPLAY HOSTING. ALL RIGHTS RESERVED.</p>
          <p className="opacity-50">BUKAN PRODUK RESMI MINECRAFT. TIDAK TERAFILIASI DENGAN MOJANG AB.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="https://discord.gg/altplay" className="hover:text-primary transition-colors">Discord</a>
          <a href="#" className="hover:text-primary transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
