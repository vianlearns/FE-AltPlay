export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6 max-w-xs">
          <img src="/ALTPLAY-logo.png" alt="ALTPLAY" className="h-8 w-auto" />
          <p className="text-on-surface-variant text-sm leading-relaxed">Platform hosting Minecraft paling gokil dengan hardware kelas sultan. Diciptakan buat komunitas yang mau performa tanpa kompromi.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Produk</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="/pricing" className="hover:text-primary transition-colors">Server Minecraft</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Dedicated Server</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Domain</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="/contact" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Status Sistem</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline font-bold text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Ketentuan Layanan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SLA</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
        <span>© 2026 ALTPLAY. BUKAN PRODUK RESMI MINECRAFT.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-on-surface transition-colors">Instagram</a>
          <a href="#" className="hover:text-on-surface transition-colors">Twitter</a>
          <a href="#" className="hover:text-on-surface transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
