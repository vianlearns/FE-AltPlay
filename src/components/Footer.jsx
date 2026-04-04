export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-12 md:py-20 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-xs w-full">
          <div className="flex items-center gap-3 mb-6">
            <img src="/ALTPLAY-logo.png" alt="ALTPLAY Logo" className="h-8 w-auto brightness-0 invert" />
            <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400 font-headline uppercase">
              ALTPLAY
            </div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed">Platform hosting Minecraft paling gokil dengan hardware kelas sultan. Diciptakan buat komunitas yang mau performa tanpa kompromi.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12 w-full lg:w-auto">
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface">Produk</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="/harga" className="hover:text-primary transition-colors block py-1">Server Minecraft</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Dedicated Server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Domain</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface">Support</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="/contact" className="hover:text-primary transition-colors block py-1">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Status Sistem</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest text-on-surface">Legal</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Ketentuan Layanan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">SLA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-widest text-center md:text-left">
        <span>© 2026 ALTPLAY. BUKAN PRODUK RESMI MINECRAFT.</span>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-on-surface transition-colors">Instagram</a>
          <a href="#" className="hover:text-on-surface transition-colors">Twitter</a>
          <a href="#" className="hover:text-on-surface transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
