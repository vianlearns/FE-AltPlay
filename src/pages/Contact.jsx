import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // 'idle', 'sending', 'sent'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
    }, 1500);
  };

  return (
    <Layout>
      <div className="pt-24 md:pt-28 pb-32 px-6 md:px-8 min-h-screen relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Header & Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.2em] uppercase">
                Hubungi Kami
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-black tracking-tighter leading-none uppercase text-on-surface">
                BUTUH <span className="text-primary">BANTUAN</span>?
              </h1>
              <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
                Tim support kami standby 24/7 buat mastiin server kamu tetep gacor. Ada kendala teknis atau mau tanya soal paket? Gaskan chat kami!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Support Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight">Technical Support</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Buat masalah plugin, lag, atau setup server.</p>
                </div>
                <a href="https://discord.gg/altplay" className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Buka Tiket Discord <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>

              {/* Billing Card */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
                <div className="w-12 h-12 bg-secondary-container/10 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">payments</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface uppercase tracking-tight">Billing & Sales</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Tanya soal pembayaran atau custom plan.</p>
                </div>
                <a href="mailto:billing@altplay.store" className="text-secondary-fixed-dim text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Kirim Email <span className="material-symbols-outlined text-sm">east</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Ikuti Kami</p>
              <div className="flex gap-4">
                {/* Discord */}
                <a href="https://discord.gg/altplay" aria-label="Join our Discord Server" className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center hover:bg-[#5865F2] hover:text-white transition-all border border-white/5 group">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.003 14.003 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="#" aria-label="Follow us on X (Twitter)" className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Follow us on Instagram" className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:text-white transition-all border border-white/5">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.303.058-2.535.312-3.486 1.263-.951.951-1.205 2.183-1.263 3.486-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.303.312 2.535 1.263 3.486.951.951 2.183 1.205 3.486 1.263 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.303-.058 2.535-.312 3.486-1.263.951-.951 1.205-2.183 1.263-3.486.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.303-.312-2.535-1.263-3.486-.951-.951-2.183-1.205-3.486-1.263-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" aria-label="Subscribe to our YouTube Channel" className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all border border-white/5">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 0 0 2.122 2.136c1.871.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent blur-2xl opacity-20"></div>
            <div className="relative glass-panel p-10 rounded-3xl border border-white/10 bg-[#131313]/50 backdrop-blur-3xl shadow-2xl">
              <h2 className="text-2xl font-headline font-bold mb-8">Kirim Pesan</h2>

              {formState === 'sent' ? (
                <div className="py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                    <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold">Pesan Terkirim!</h3>
                    <p className="text-on-surface-variant mt-2">Tim ALTPLAY bakal bales secepat mungkin.</p>
                  </div>
                  <button onClick={() => setFormState('idle')} className="text-primary font-bold hover:underline">Kirim pesan lagi?</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Nama Lengkap</label>
                      <input id="fullName" required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none" placeholder="Udin Sedunia" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="emailAddress" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email Aktif</label>
                      <input id="emailAddress" required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none" placeholder="udin@gmail.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Subjek</label>
                    <select id="subject" className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none appearance-none cursor-pointer">
                      <option>Tanya soal Paket</option>
                      <option>Kendala Teknis</option>
                      <option>Pembayaran</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Pesan Kamu</label>
                    <textarea id="message" required className="w-full bg-surface-container border-none rounded-xl py-4 px-5 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none min-h-[150px] resize-none" placeholder="Halo min, mau tanya dong..."></textarea>
                  </div>

                  <button
                    disabled={formState === 'sending'}
                    className="w-full bg-primary text-on-primary-container py-5 rounded-2xl font-headline font-black text-lg uppercase tracking-tighter shadow-[0_15px_30px_-5px_rgba(0,209,255,0.3)] hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-3"
                  >
                    {formState === 'sending' ? (
                      <>
                        <span className="animate-spin material-symbols-outlined">progress_activity</span>
                        <span>Lagi Ngirim...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Sekarang</span>
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
